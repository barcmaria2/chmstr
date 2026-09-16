/* =====================================================================
   Pomogator.med · Химия — общий движок уроков.
   Подключается один раз в каждом lesson-N.html, который задаёт только
   переменные LESSON (метаданные) и data (контент). Вся логика — здесь,
   поэтому правки/новые фичи вносятся один раз и работают во всех уроках.
   ===================================================================== */

(function () {
  const STORAGE_KEY = `pomogator:chem:${LESSON.id}`;

  // ---------- прогресс: localStorage ----------
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) { /* localStorage недоступен — тихо игнорируем */ }
  }
  function setAnswer(key, subIndex, correct) {
    const p = loadProgress();
    if (!p[key]) p[key] = {};
    p[key][subIndex] = !!correct;
    saveProgress(p);
    renderMenu(); // обновить бейджи прогресса в меню
  }

  // ---------- подсчёт итогов по ключу ----------
  function itemsForKey(key, type) {
    // возвращает массив "элементов ответа" с общим счётом шагов
    if (type === 'tasks') {
      const arr = data[key] || [];
      let total = 0;
      arr.forEach(t => total += (t.steps ? t.steps.length : 0));
      return total;
    }
    if (type === 'tests') return (data[key] || []).length;
    if (type === 'questions') return (data[key] || []).length;
    return 0;
  }

  function progressForKey(key, type) {
    const p = loadProgress();
    const answered = p[key] ? Object.keys(p[key]).length : 0;
    const correct = p[key] ? Object.values(p[key]).filter(Boolean).length : 0;
    const total = itemsForKey(key, type);
    return { answered, correct, total };
  }

  // ---------- рендер меню ----------
  function renderMenu() {
    const grid = document.getElementById('menuGrid');
    if (!grid) return;
    grid.innerHTML = '';
    LESSON.menu.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'btn';
      const label = document.createElement('span');
      label.className = 'btn-label';
      label.innerHTML = `<span>${item.icon || ''}</span><span>${item.label}</span>`;
      btn.appendChild(label);

      if (item.type !== 'cheat') {
        const { answered, correct, total } = progressForKey(item.key, item.type);
        const badge = document.createElement('span');
        badge.className = 'btn-progress';
        if (total > 0 && answered >= total) {
          badge.classList.add(correct === total ? 'is-done' : 'has-errors');
        }
        if (item.type === 'questions') {
          badge.textContent = total ? `просмотрено ${answered}/${total}` : '';
        } else {
          badge.textContent = total ? `${answered}/${total}` : '';
        }
        if (total) btn.appendChild(badge);
      }
      btn.addEventListener('click', () => show(item.key));
      grid.appendChild(btn);
    });

    // кнопка "Ошибки" — показываем только если есть хоть один неверный ответ
    const mistakesBtn = document.getElementById('mistakesBtn');
    if (mistakesBtn) {
      const total = countMistakes();
      mistakesBtn.style.display = total > 0 ? 'flex' : 'none';
      mistakesBtn.querySelector('.btn-progress').textContent = total;
    }
  }

  function countMistakes() {
    const p = loadProgress();
    let n = 0;
    Object.keys(p).forEach(key => {
      Object.values(p[key]).forEach(v => { if (!v) n++; });
    });
    return n;
  }

  // ---------- переключение видов ----------
  function show(viewId) {
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));

    if (viewId === 'menu') {
      document.getElementById('menu').classList.add('active');
      renderMenu();
      return;
    }

    const content = document.getElementById('content');
    const body = document.getElementById('content-body');
    body.innerHTML = '';

    if (viewId === 'mistakes') {
      renderMistakes(body);
    } else {
      const item = LESSON.menu.find(m => m.key === viewId);
      if (!item) return;
      if (item.type === 'cheat') {
        body.innerHTML = data[viewId];
      } else if (item.type === 'tasks') {
        renderTasks(viewId, data[viewId], body);
      } else if (item.type === 'tests') {
        renderTests(viewId, data[viewId], body);
      } else if (item.type === 'questions') {
        renderQuestions(viewId, data[viewId], body);
      }
    }

    content.classList.add('active');
    window.scrollTo(0, 0);
  }
  window.show = show;

  // ---------- задачи по действиям ----------
  function renderTasks(key, tasksArr, container) {
    const p = loadProgress()[key] || {};
    let html = '';
    tasksArr.forEach((task, tIndex) => {
      html += `<div class="content-box">
        <div class="content-title">${task.title}</div>
        <p style="font-size:1.05rem;">${task.desc}</p>`;

      task.steps.forEach((step, sIndex) => {
        const subKey = `${tIndex}-${sIndex}`;
        const already = subKey in p;
        const display = (sIndex === 0 || (tIndex + '-' + (sIndex - 1)) in p) ? 'block' : 'none';
        html += `<div class="step" id="step-${key}-${tIndex}-${sIndex}" style="display:${display};">
          <div class="step-q">${step.q}</div>
          <div class="input-row">
            <input type="text" id="input-${key}-${tIndex}-${sIndex}" placeholder="Ваш ответ..." ${already ? 'disabled' : ''}>
            <button id="btn-${key}-${tIndex}-${sIndex}" ${already ? 'disabled' : ''}
              onclick="QuizEngine.checkTask('${key}', ${tIndex}, ${sIndex}, ${step.a}, ${task.steps.length})">Проверить</button>
          </div>
          <div class="solution ${already ? (p[subKey] ? 'correct' : 'error') : ''}" id="sol-${key}-${tIndex}-${sIndex}">
            ${already ? (p[subKey] ? '<strong>✅ Верно!</strong><br><br>' : `<strong>❌ Неверно. Правильный ответ: ${step.a}</strong><br><br>`) + step.sol : step.sol}
          </div>
        </div>`;
      });
      html += `</div>`;
    });
    container.innerHTML = html;
  }

  function checkTask(key, t, s, correctAns, totalSteps) {
    const inputEl = document.getElementById(`input-${key}-${t}-${s}`);
    const userVal = parseFloat(String(inputEl.value).replace(',', '.'));

    if (isNaN(userVal)) {
      alert('Пожалуйста, введите числовое значение.');
      return;
    }

    const btn = document.getElementById(`btn-${key}-${t}-${s}`);
    const solBox = document.getElementById(`sol-${key}-${t}-${s}`);

    btn.disabled = true;
    inputEl.disabled = true;
    solBox.style.display = 'block';

    const isCorrect = Math.abs(userVal - correctAns) <= Math.max(0.05, Math.abs(correctAns * 0.05));

    if (isCorrect) {
      solBox.className = 'solution correct';
      solBox.innerHTML = `<strong>✅ Верно!</strong><br><br>` + solBox.innerHTML;
    } else {
      solBox.className = 'solution error';
      solBox.innerHTML = `<strong>❌ Неверно. Правильный ответ: ${correctAns}</strong><br><br>` + solBox.innerHTML;
    }

    setAnswer(key, `${t}-${s}`, isCorrect);

    const nextStep = document.getElementById(`step-${key}-${t}-${s + 1}`);
    if (nextStep) nextStep.style.display = 'block';
  }

  // ---------- тесты с вариантами (варианты перемешиваются) ----------
  function shuffledOrder(n, seedKey) {
    // детерминированное перемешивание на основе ключа вопроса, чтобы порядок
    // не менялся при повторном рендере той же сессии, но отличался от исходного
    const order = Array.from({ length: n }, (_, i) => i);
    let seed = 0;
    for (let i = 0; i < seedKey.length; i++) seed = (seed * 31 + seedKey.charCodeAt(i)) >>> 0;
    for (let i = order.length - 1; i > 0; i--) {
      seed = (seed * 1103515245 + 12345) >>> 0;
      const j = seed % (i + 1);
      [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
  }

  function renderTests(key, testsArr, container) {
    const p = loadProgress()[key] || {};
    let html = '';
    testsArr.forEach((test, qIndex) => {
      const order = shuffledOrder(test.options.length, `${key}-${qIndex}`);
      const answered = qIndex in p;
      html += `<div class="content-box">
        <div class="content-title">Вопрос ${qIndex + 1}</div>
        <p style="font-weight:700; font-size:1.05rem; margin-bottom:14px;">${test.q}</p>
        <div id="opts-${key}-${qIndex}">`;

      order.forEach(optIndex => {
        const isCorrectOpt = optIndex === test.correct;
        let cls = 'test-option';
        if (answered && isCorrectOpt) cls += ' correct-btn';
        html += `<button class="${cls}" id="btn-t-${key}-${qIndex}-${optIndex}" ${answered ? 'disabled' : ''}
          onclick="QuizEngine.checkTest('${key}', ${qIndex}, ${optIndex}, ${test.correct})">${test.options[optIndex]}</button>`;
      });

      html += `</div>
        <div class="solution ${answered ? (p[qIndex] ? 'correct' : 'error') : ''}" id="sol-t-${key}-${qIndex}">
          ${answered ? (p[qIndex] ? '<strong>✅ Верно!</strong><br><br>' : '<strong>❌ Неверно.</strong> Правильный ответ выделен зелёным.<br><br>') : ''}<strong>Объяснение:</strong> ${test.explanation}
        </div>
      </div>`;
    });
    container.innerHTML = html;
  }

  function checkTest(key, q, opt, correctOpt) {
    const container = document.getElementById(`opts-${key}-${q}`);
    const buttons = container.getElementsByTagName('button');
    const solBox = document.getElementById(`sol-t-${key}-${q}`);

    for (const btn of buttons) btn.disabled = true;

    solBox.style.display = 'block';
    const isCorrect = opt === correctOpt;

    if (isCorrect) {
      document.getElementById(`btn-t-${key}-${q}-${opt}`).classList.add('correct-btn');
      solBox.className = 'solution correct';
      solBox.innerHTML = `<strong>✅ Верно!</strong><br><br>` + solBox.innerHTML;
    } else {
      document.getElementById(`btn-t-${key}-${q}-${opt}`).classList.add('error-btn');
      document.getElementById(`btn-t-${key}-${q}-${correctOpt}`).classList.add('correct-btn');
      solBox.className = 'solution error';
      solBox.innerHTML = `<strong>❌ Неверно.</strong> Правильный ответ выделен зелёным.<br><br>` + solBox.innerHTML;
    }

    setAnswer(key, q, isCorrect);
  }

  // ---------- теоретические вопросы (флэш-карты) ----------
  function renderQuestions(key, qArr, container) {
    const p = loadProgress()[key] || {};
    let html = '<div style="margin-bottom:16px;"><strong style="font-size:1.1rem; color:#1e40af;">Теоретические вопросы для самопроверки</strong></div>';
    qArr.forEach((q, idx) => {
      const seen = idx in p;
      html += `<div class="content-box step">
        <div class="step-q"><b>Вопрос ${idx + 1}.</b> ${q.q}</div>
        <button class="btn-show" style="${seen ? 'display:none;' : ''}"
          onclick="QuizEngine.revealAnswer('${key}', ${idx}, this)">Показать ответ</button>
        <div class="solution" id="ans-${key}-${idx}" style="${seen ? 'display:block;' : 'display:none;'} background:#eff6ff; border-left:4px solid #2563eb; color:#1e293b;">
          ${q.a}
        </div>
      </div>`;
    });
    container.innerHTML = html;
  }

  function revealAnswer(key, idx, btnEl) {
    document.getElementById(`ans-${key}-${idx}`).style.display = 'block';
    btnEl.style.display = 'none';
    setAnswer(key, idx, true); // для вопросов "правильность" не считается — фиксируем просмотр
  }

  // ---------- режим "Ошибки" ----------
  function renderMistakes(container) {
    const p = loadProgress();
    let html = '';
    let found = 0;

    LESSON.menu.forEach(item => {
      if (item.type === 'tasks') {
        const arr = data[item.key] || [];
        const wrongSteps = [];
        arr.forEach((task, tIndex) => {
          task.steps.forEach((step, sIndex) => {
            const subKey = `${tIndex}-${sIndex}`;
            if (p[item.key] && p[item.key][subKey] === false) {
              wrongSteps.push({ task, step });
            }
          });
        });
        if (wrongSteps.length) {
          found += wrongSteps.length;
          html += `<div class="content-box"><div class="content-title">${item.label.replace(/^\S+\s/, '')}</div>`;
          wrongSteps.forEach(({ task, step }) => {
            html += `<div class="step"><div class="step-q"><b>${task.title}</b><br>${step.q}</div>
              <div class="solution error" style="display:block;"><strong>Правильный ответ: ${step.a}</strong><br><br>${step.sol}</div></div>`;
          });
          html += `</div>`;
        }
      } else if (item.type === 'tests') {
        const arr = data[item.key] || [];
        const wrong = [];
        arr.forEach((test, qIndex) => {
          if (p[item.key] && p[item.key][qIndex] === false) wrong.push(test);
        });
        if (wrong.length) {
          found += wrong.length;
          html += `<div class="content-box"><div class="content-title">${item.label.replace(/^\S+\s/, '')}</div>`;
          wrong.forEach(test => {
            html += `<div class="step"><div class="step-q">${test.q}</div>
              <div class="solution correct" style="display:block;"><strong>Правильный ответ: ${test.options[test.correct]}</strong><br><br>${test.explanation}</div></div>`;
          });
          html += `</div>`;
        }
      }
    });

    if (!found) {
      container.innerHTML = `<div class="mistakes-empty"><div class="big">🎉</div>Ошибок пока нет — либо всё решено верно, либо вы ещё не начали.</div>`;
    } else {
      container.innerHTML = html;
    }
  }

  // ---------- инициализация ----------
  function init() {
    document.getElementById('lessonTitle').textContent = LESSON.title;
    renderMenu();
  }

  window.QuizEngine = { checkTask, checkTest, revealAnswer };
  document.addEventListener('DOMContentLoaded', init);
})();
