(() => {
  const COLS = 10;
  const ROWS = 20;
  const SIZE = 30;
  const PREVIEW = 4;

  const COLORS = {
    I: "#67e8f9",
    O: "#fde047",
    T: "#c084fc",
    S: "#4ade80",
    Z: "#fb7185",
    J: "#60a5fa",
    L: "#fb923c",
  };

  const SHAPES = {
    I: [
      [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
      ],
      [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
      ],
    ],
    O: [
      [
        [1, 1],
        [1, 1],
      ],
    ],
    T: [
      [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
      ],
      [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0],
      ],
      [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
      ],
      [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0],
      ],
    ],
    S: [
      [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
      ],
      [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1],
      ],
      [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0],
      ],
      [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0],
      ],
    ],
    Z: [
      [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
      ],
      [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0],
      ],
      [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1],
      ],
      [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0],
      ],
    ],
    J: [
      [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ],
      [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
      ],
      [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
      ],
      [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
      ],
    ],
    L: [
      [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
      ],
      [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1],
      ],
      [
        [0, 0, 0],
        [1, 1, 1],
        [1, 0, 0],
      ],
      [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ],
    ],
  };

  const KICKS = {
    normal: {
      "0>1": [
        [0, 0],
        [-1, 0],
        [-1, 1],
        [0, -2],
        [-1, -2],
      ],
      "1>0": [
        [0, 0],
        [1, 0],
        [1, -1],
        [0, 2],
        [1, 2],
      ],
      "1>2": [
        [0, 0],
        [1, 0],
        [1, -1],
        [0, 2],
        [1, 2],
      ],
      "2>1": [
        [0, 0],
        [-1, 0],
        [-1, 1],
        [0, -2],
        [-1, -2],
      ],
      "2>3": [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, -2],
        [1, -2],
      ],
      "3>2": [
        [0, 0],
        [-1, 0],
        [-1, -1],
        [0, 2],
        [-1, 2],
      ],
      "3>0": [
        [0, 0],
        [-1, 0],
        [-1, -1],
        [0, 2],
        [-1, 2],
      ],
      "0>3": [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, -2],
        [1, -2],
      ],
    },
    I: {
      "0>1": [
        [0, 0],
        [-2, 0],
        [1, 0],
        [-2, -1],
        [1, 2],
      ],
      "1>0": [
        [0, 0],
        [2, 0],
        [-1, 0],
        [2, 1],
        [-1, -2],
      ],
      "1>2": [
        [0, 0],
        [-1, 0],
        [2, 0],
        [-1, 2],
        [2, -1],
      ],
      "2>1": [
        [0, 0],
        [1, 0],
        [-2, 0],
        [1, -2],
        [-2, 1],
      ],
      "2>3": [
        [0, 0],
        [2, 0],
        [-1, 0],
        [2, 1],
        [-1, -2],
      ],
      "3>2": [
        [0, 0],
        [-2, 0],
        [1, 0],
        [-2, -1],
        [1, 2],
      ],
      "3>0": [
        [0, 0],
        [1, 0],
        [-2, 0],
        [1, -2],
        [-2, 1],
      ],
      "0>3": [
        [0, 0],
        [-1, 0],
        [2, 0],
        [-1, 2],
        [2, -1],
      ],
    },
  };

  const boardEl = document.getElementById("board");
  const holdEl = document.getElementById("hold");
  const nextEl = document.getElementById("next");
  const ctx = boardEl.getContext("2d");
  const holdCtx = holdEl.getContext("2d");
  const nextCtx = nextEl.getContext("2d");
  const overlay = document.getElementById("overlay");
  const overlayTitle = document.getElementById("overlay-title");
  const overlayText = document.getElementById("overlay-text");
  const startBtn = document.getElementById("start-btn");

  const state = {
    grid: emptyGrid(),
    bag: [],
    queue: [],
    current: null,
    hold: null,
    canHold: true,
    score: 0,
    lines: 0,
    level: 1,
    dropMs: 800,
    lastDrop: 0,
    playing: false,
    paused: false,
    over: false,
    anim: 0,
  };

  function emptyGrid() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function refillBag() {
    state.bag.push(...shuffle(["I", "O", "T", "S", "Z", "J", "L"]));
  }

  function takePiece() {
    if (state.bag.length < 7) refillBag();
    const type = state.bag.shift();
    return spawn(type);
  }

  function spawn(type) {
    const rotations = SHAPES[type];
    return {
      type,
      rot: 0,
      x: Math.floor((COLS - rotations[0][0].length) / 2),
      y: 0,
    };
  }

  function matrix(piece) {
    const rots = SHAPES[piece.type];
    return rots[piece.rot % rots.length];
  }

  function collides(piece, ox = 0, oy = 0, rot = piece.rot) {
    const shape = SHAPES[piece.type][rot % SHAPES[piece.type].length];
    for (let r = 0; r < shape.length; r += 1) {
      for (let c = 0; c < shape[r].length; c += 1) {
        if (!shape[r][c]) continue;
        const x = piece.x + c + ox;
        const y = piece.y + r + oy;
        if (x < 0 || x >= COLS || y >= ROWS) return true;
        if (y >= 0 && state.grid[y][x]) return true;
      }
    }
    return false;
  }

  function merge(piece) {
    const shape = matrix(piece);
    for (let r = 0; r < shape.length; r += 1) {
      for (let c = 0; c < shape[r].length; c += 1) {
        if (!shape[r][c]) continue;
        const y = piece.y + r;
        const x = piece.x + c;
        if (y < 0) {
          endGame();
          return;
        }
        state.grid[y][x] = piece.type;
      }
    }
  }

  function clearLines() {
    let cleared = 0;
    for (let y = ROWS - 1; y >= 0; y -= 1) {
      if (state.grid[y].every(Boolean)) {
        state.grid.splice(y, 1);
        state.grid.unshift(Array(COLS).fill(null));
        cleared += 1;
        y += 1;
      }
    }
    if (!cleared) return;
    const table = [0, 100, 300, 500, 800];
    state.lines += cleared;
    state.score += table[cleared] * state.level;
    state.level = Math.floor(state.lines / 10) + 1;
    state.dropMs = Math.max(90, 800 - (state.level - 1) * 70);
    updateHud();
  }

  function ghostY(piece) {
    let y = 0;
    while (!collides(piece, 0, y + 1)) y += 1;
    return piece.y + y;
  }

  function rotate(dir) {
    const piece = state.current;
    if (!piece || piece.type === "O") return;
    const from = piece.rot;
    const to = (piece.rot + dir + 4) % 4;
    const table = piece.type === "I" ? KICKS.I : KICKS.normal;
    const key = `${from}>${to}`;
    const tests = table[key] || [[0, 0]];
    for (const [kx, ky] of tests) {
      if (!collides(piece, kx, -ky, to)) {
        piece.x += kx;
        piece.y -= ky;
        piece.rot = to;
        return;
      }
    }
  }

  function move(dx, dy) {
    const piece = state.current;
    if (!piece) return false;
    if (!collides(piece, dx, dy)) {
      piece.x += dx;
      piece.y += dy;
      return true;
    }
    return false;
  }

  function hardDrop() {
    const piece = state.current;
    if (!piece) return;
    let dropped = 0;
    while (move(0, 1)) dropped += 1;
    state.score += dropped * 2;
    lockPiece();
  }

  function lockPiece() {
    merge(state.current);
    if (state.over) return;
    clearLines();
    state.canHold = true;
    spawnNext();
  }

  function hold() {
    if (!state.canHold || !state.current) return;
    const type = state.current.type;
    if (state.hold) {
      state.current = spawn(state.hold);
      state.hold = type;
    } else {
      state.hold = type;
      spawnNext();
    }
    if (collides(state.current)) endGame();
    state.canHold = false;
  }

  function fillQueue() {
    while (state.queue.length < PREVIEW) state.queue.push(takePiece().type);
  }

  function spawnNext() {
    fillQueue();
    state.current = spawn(state.queue.shift());
    fillQueue();
    if (collides(state.current)) endGame();
  }

  function reset() {
    state.grid = emptyGrid();
    state.bag = [];
    state.queue = [];
    state.hold = null;
    state.canHold = true;
    state.score = 0;
    state.lines = 0;
    state.level = 1;
    state.dropMs = 800;
    state.lastDrop = performance.now();
    state.playing = true;
    state.paused = false;
    state.over = false;
    spawnNext();
    updateHud();
    setOverlay(false);
  }

  function endGame() {
    state.playing = false;
    state.over = true;
    overlayTitle.textContent = "Game over";
    overlayText.textContent = `Score ${state.score} · Lines ${state.lines}`;
    startBtn.textContent = "Play again";
    setOverlay(true);
  }

  function setOverlay(show) {
    overlay.classList.toggle("hidden", !show);
  }

  function updateHud() {
    document.getElementById("score").textContent = state.score.toLocaleString();
    document.getElementById("lines").textContent = String(state.lines);
    document.getElementById("level").textContent = String(state.level);
  }

  function cell(ctx2, x, y, color, ghost = false) {
    const px = x * SIZE;
    const py = y * SIZE;
    ctx2.save();
    ctx2.globalAlpha = ghost ? 0.22 : 1;
    ctx2.fillStyle = color;
    ctx2.fillRect(px + 1, py + 1, SIZE - 2, SIZE - 2);
    ctx2.fillStyle = "rgba(255,255,255,0.18)";
    ctx2.fillRect(px + 3, py + 3, SIZE - 10, 6);
    ctx2.restore();
  }

  function drawBoard() {
    ctx.fillStyle = "#0a0e16";
    ctx.fillRect(0, 0, boardEl.width, boardEl.height);
    ctx.strokeStyle = "rgba(255,255,255,0.04)";
    for (let x = 0; x <= COLS; x += 1) {
      ctx.beginPath();
      ctx.moveTo(x * SIZE, 0);
      ctx.lineTo(x * SIZE, ROWS * SIZE);
      ctx.stroke();
    }
    for (let y = 0; y <= ROWS; y += 1) {
      ctx.beginPath();
      ctx.moveTo(0, y * SIZE);
      ctx.lineTo(COLS * SIZE, y * SIZE);
      ctx.stroke();
    }
    for (let y = 0; y < ROWS; y += 1) {
      for (let x = 0; x < COLS; x += 1) {
        const t = state.grid[y][x];
        if (t) cell(ctx, x, y, COLORS[t]);
      }
    }
    const piece = state.current;
    if (!piece || state.over) return;
    const gy = ghostY(piece);
    const shape = matrix(piece);
    for (let r = 0; r < shape.length; r += 1) {
      for (let c = 0; c < shape[r].length; c += 1) {
        if (!shape[r][c]) continue;
        cell(ctx, piece.x + c, gy + r, COLORS[piece.type], true);
      }
    }
    for (let r = 0; r < shape.length; r += 1) {
      for (let c = 0; c < shape[r].length; c += 1) {
        if (!shape[r][c]) continue;
        const y = piece.y + r;
        if (y >= 0) cell(ctx, piece.x + c, y, COLORS[piece.type]);
      }
    }
  }

  function drawMini(target, types, cellSize) {
    target.fillStyle = "#0a0e16";
    target.fillRect(0, 0, target.canvas.width, target.canvas.height);
    types.forEach((type, i) => {
      if (!type) return;
      const shape = SHAPES[type][0];
      const w = shape[0].length;
      const h = shape.length;
      const ox = (target.canvas.width / cellSize - w) / 2;
      const oy = i * 4 + (4 - h) / 2;
      for (let r = 0; r < h; r += 1) {
        for (let c = 0; c < w; c += 1) {
          if (!shape[r][c]) continue;
          const px = (ox + c) * cellSize;
          const py = (oy + r) * cellSize;
          target.fillStyle = COLORS[type];
          target.fillRect(px + 1, py + 1, cellSize - 2, cellSize - 2);
        }
      }
    });
  }

  function drawSide() {
    drawMini(holdCtx, [state.hold], 24);
    drawMini(nextCtx, state.queue.slice(0, PREVIEW), 24);
  }

  function tick(now) {
    state.anim = requestAnimationFrame(tick);
    if (state.playing && !state.paused) {
      if (now - state.lastDrop >= state.dropMs) {
        if (!move(0, 1)) lockPiece();
        else state.score += 0;
        state.lastDrop = now;
        updateHud();
      }
    }
    drawBoard();
    drawSide();
  }

  function togglePause() {
    if (!state.playing) return;
    state.paused = !state.paused;
    if (state.paused) {
      overlayTitle.textContent = "Paused";
      overlayText.textContent = "Press P or Enter to resume";
      startBtn.textContent = "Resume";
      setOverlay(true);
    } else {
      setOverlay(false);
      state.lastDrop = performance.now();
    }
  }

  function handleAction(act) {
    if (act === "start") {
      if (state.paused) {
        togglePause();
        return;
      }
      reset();
      return;
    }
    if (!state.playing || state.paused) return;
    if (act === "left") move(-1, 0);
    if (act === "right") move(1, 0);
    if (act === "down") {
      if (move(0, 1)) {
        state.score += 1;
        state.lastDrop = performance.now();
        updateHud();
      } else lockPiece();
    }
    if (act === "rotR") rotate(1);
    if (act === "rotL") rotate(-1);
    if (act === "drop") hardDrop();
    if (act === "hold") hold();
  }

  document.addEventListener("keydown", (e) => {
    const map = {
      ArrowLeft: "left",
      ArrowRight: "right",
      ArrowDown: "down",
      ArrowUp: "rotR",
      x: "rotR",
      X: "rotR",
      z: "rotL",
      Z: "rotL",
      " ": "drop",
      c: "hold",
      C: "hold",
      Shift: "hold",
    };
    if (e.key === "Enter") {
      e.preventDefault();
      handleAction("start");
      return;
    }
    if (e.key === "p" || e.key === "P") {
      e.preventDefault();
      togglePause();
      return;
    }
    const act = map[e.key];
    if (!act) return;
    e.preventDefault();
    handleAction(act);
  });

  startBtn.addEventListener("click", () => handleAction("start"));
  document.querySelectorAll(".touch button").forEach((btn) => {
    btn.addEventListener("click", () => handleAction(btn.dataset.act));
  });

  updateHud();
  requestAnimationFrame(tick);
})();
