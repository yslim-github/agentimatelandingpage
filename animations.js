const animations = {
  // @examples의 모든 애니메이션 명령어들
  commands: [
    'Make it float...',
    'Draw a line...',
    'Create patterns...',
    'Stagger dots...',
    'Morph shapes...',
    'Add particles...',
    'Create waves...',
    'Transform path...',
    'Animate logo...',
    'Stagger grid...',
    'Follow path...',
    'Create layers...',
    'Animate colors...',
    'Ease motion...',
    'Complex move...',
    'Advanced stagger...',
    'Animate MGS logo...',
    'Test colors...',
    'Control time...',
    'Follow scroll...',
    'Create keyframes...',
    'Layer elements...',
    'Speed test...',
    'Stagger demo...',
    'Test easings...',
    'Draw SVG lines...',
    'Responsive path...',
    'Assemble components...',
    'Make it hover...',
    'Change aspect ratio...',
    'Add depth...',
    'Make it flow...',
    'Transform layout...',
    'Advanced stagger 2...',
    'Test directions...',
    'Stress test...',
    'Visualize ease...',
    'Callback demo...',
    'Complex motion...'
  ],

  currentIndex: 0,
  isFirstRound: true,
  
  getNextCommand() {
    // 첫 라운드에서는 순차적으로 실행
    if (this.isFirstRound) {
      const command = this.commands[this.currentIndex++];
      
      // 모든 애니메이션이 한 번씩 실행되었으면
      if (this.currentIndex >= this.commands.length) {
        this.isFirstRound = false;
        this.currentIndex = 0;
        this.shuffleCommands();
      }
      
      return command;
    } 
    // 이후 라운드에서는 랜덤 순서로 실행
    else {
      if (this.currentIndex >= this.commands.length) {
        this.shuffleCommands();
        this.currentIndex = 0;
      }
      return this.commands[this.currentIndex++];
    }
  },

  shuffleCommands() {
    for (let i = this.commands.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.commands[i], this.commands[j]] = [this.commands[j], this.commands[i]];
    }
  },

  createTypingAnimation(element, text, callback) {
    element.innerHTML = '';
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '|';
    element.appendChild(cursor);
    
    let currentText = '';
    let currentIndex = 0;
    
    const typeNextChar = () => {
      if (currentIndex < text.length) {
        currentText += text[currentIndex];
        element.textContent = currentText;
        element.appendChild(cursor);
        currentIndex++;
        setTimeout(typeNextChar, anime.random(50, 150));
      } else {
        if (callback) callback();
      }
    };

    typeNextChar();
  },

  switchAnimation(command) {
    const canvas = document.querySelector('.animation-canvas');
    canvas.innerHTML = '';

    switch(command.toLowerCase()) {
      case 'make it float...':
        this.createFloatingCircle(canvas);
        break;
      case 'draw a line...':
        this.createDrawingLine(canvas);
        break;
      case 'create patterns...':
        this.createPatternGrid(canvas);
        break;
      case 'stagger dots...':
        this.createStaggerDots(canvas);
        break;
      case 'morph shapes...':
        this.createMorphingShape(canvas);
        break;
      case 'add particles...':
        this.createParticles(canvas);
        break;
      case 'create waves...':
        this.createWaveAnimation(canvas);
        break;
      case 'transform path...':
        this.createPathTransform(canvas);
        break;
      case 'animate logo...':
        this.createLogoAnimation(canvas);
        break;
      case 'stagger grid...':
        this.createStaggerGrid(canvas);
        break;
      case 'follow path...':
        this.createPathFollower(canvas);
        break;
      case 'create layers...':
        this.createLayeredAnimation(canvas);
        break;
      case 'animate colors...':
        this.createColorAnimation(canvas);
        break;
      case 'ease motion...':
        this.createEaseAnimation(canvas);
        break;
      case 'complex move...':
        this.createComplexAnimation(canvas);
        break;
      case 'advanced stagger...':
        this.createAdvancedStagger(canvas);
        break;
      case 'animate mgs logo...':
        this.createMGSLogoAnimation(canvas);
        break;
      case 'test colors...':
        this.createColorTest(canvas);
        break;
      case 'control time...':
        this.createTimeControl(canvas);
        break;
      case 'follow scroll...':
        this.createScrollFollower(canvas);
        break;
      case 'create keyframes...':
        this.createKeyframeAnimation(canvas);
        break;
      case 'layer elements...':
        this.createLayeredElements(canvas);
        break;
      case 'speed test...':
        this.createSpeedTest(canvas);
        break;
      case 'stagger demo...':
        this.createStaggerDemo(canvas);
        break;
      case 'test easings...':
        this.createEasingTest(canvas);
        break;
      case 'draw svg lines...':
        this.createSVGLinesAnimation(canvas);
        break;
      case 'responsive path...':
        this.createResponsivePath(canvas);
        break;
      case 'assemble components...':
        this.createAssemblyAnimation(canvas);
        break;
      case 'make it hover...':
        this.createComponentAnimation(canvas);
        break;
      case 'change aspect ratio...':
        this.createAspectRatioChange(canvas);
        break;
      case 'add depth...':
        this.createDepthAddition(canvas);
        break;
      case 'make it flow...':
        this.createFlowAnimation(canvas);
        break;
      case 'transform layout...':
        this.createLayoutTransformation(canvas);
        break;
      case 'advanced stagger 2...':
        this.createAdvancedStagger2(canvas);
        break;
      case 'test directions...':
        this.createDirectionsTest(canvas);
        break;
      case 'stress test...':
        this.createStressTest(canvas);
        break;
      case 'visualize ease...':
        this.createEaseVisualizer(canvas);
        break;
      case 'callback demo...':
        this.createCallbackDemo(canvas);
        break;
      case 'complex motion...':
        this.createComplexMotion(canvas);
        break;
    }
  },

  createFloatingCircle(container) {
    const circle = document.createElement('div');
    circle.style.cssText = `
      width: 80px;
      height: 80px;
      background: transparent;
      border: 3px solid #FF4B4B;
      border-radius: 50%;
      margin: 50px auto;
      position: relative;
    `;
    container.appendChild(circle);

    // 더 자연스러운 부유 효과
    anime({
      targets: circle,
      translateY: [-20, 20],
      translateX: [-10, 10],
      rotate: [-5, 5],
      scale: [0.95, 1.05],
      duration: 3000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad'
    });
  },

  createDrawingLine(container) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.style.width = '100%';
    svg.style.height = '100%';
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke', '#FF4B4B');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('fill', 'none');
    path.setAttribute('d', 'M20,50 L80,50');
    svg.appendChild(path);
    container.appendChild(svg);

    anime({
      targets: path,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      direction: 'alternate',
      loop: true
    });
  },

  createPatternGrid(container) {
    const grid = document.createElement('div');
    grid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 8px;
      width: 200px;
      height: 200px;
      margin: auto;
    `;
    container.appendChild(grid);

    for (let i = 0; i < 36; i++) {
      const dot = document.createElement('div');
      dot.style.cssText = `
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        background: #FF4B4B;
        border-radius: 50%;
        opacity: 0.2;
      `;
      grid.appendChild(dot);
    }

    anime({
      targets: grid.children,
      scale: [0, 1],
      opacity: [0.2, 0.8],
      delay: anime.stagger(50, {grid: [6, 6], from: 'center'}),
      duration: 800,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad'
    });
  },

  createStaggerDots(container) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 10px;
      width: 200px;
      margin: auto;
    `;
    container.appendChild(wrapper);

    for (let i = 0; i < 64; i++) {
      const dot = document.createElement('div');
      dot.style.cssText = `
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        background: #FF4B4B;
        border-radius: 50%;
        opacity: 0.2;
      `;
      wrapper.appendChild(dot);
    }

    anime({
      targets: wrapper.children,
      scale: [0, 1],
      opacity: [0.2, 1],
      delay: anime.stagger(50, {grid: [8, 8], from: 'center'}),
      direction: 'alternate',
      loop: true
    });
  },

  createMorphingShape(container) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 200 200');
    svg.style.cssText = `
      width: 150px;
      height: 150px;
      margin: auto;
      display: block;
    `;
    container.appendChild(svg);

    const shape = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    shape.setAttribute('fill', '#FF4B4B');
    shape.setAttribute('d', 'M100,100 L180,100 L140,180 L60,180 L20,100 L60,20 L140,20 L180,100 Z');
    svg.appendChild(shape);

    anime({
      targets: shape,
      d: [
        { value: 'M100,100 L180,100 L140,180 L60,180 L20,100 L60,20 L140,20 L180,100 Z' }, // 팔각형
        { value: 'M100,100 m-75,0 a75,75 0 1,0 150,0 a75,75 0 1,0 -150,0' }, // 원
        { value: 'M100,25 L175,175 L25,175 Z' }, // 삼각형
        { value: 'M50,50 L150,50 L150,150 L50,150 Z' } // 사각형
      ],
      duration: 2000,
      easing: 'easeInOutQuad',
      loop: true,
      direction: 'alternate'
    });
  },

  createParticles(container) {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.position = 'relative';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    container.appendChild(particlesContainer);

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: 8px;
        height: 8px;
        background: #FF4B4B;
        border-radius: 50%;
        left: 50%;
        top: 50%;
      `;
      particlesContainer.appendChild(particle);
    }

    anime({
      targets: '.particle',
      translateX: () => anime.random(-150, 150),
      translateY: () => anime.random(-150, 150),
      scale: [0, 1],
      opacity: {
        value: [1, 0],
        duration: 2000,
      },
      delay: anime.stagger(50),
      duration: 2000,
      loop: true,
      easing: 'easeOutExpo'
    });
  },

  createWaveAnimation(container) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 1000 200');
    svg.style.cssText = `
      position: relative;
      width: 100%;
      height: 150px;
      margin: 25px auto;
      display: block;
      overflow: visible;
    `;
    container.appendChild(svg);

    // 웨이브 레이어 생성
    const waveConfigs = [
      { color: '#FF4B4B', amplitude: 30, period: 4, phase: 0, opacity: 1 },
      { color: '#7B61FF', amplitude: 20, period: 3, phase: 1, opacity: 0.7 },
      { color: '#61FFB4', amplitude: 15, period: 2, phase: 2, opacity: 0.5 }
    ];

    waveConfigs.forEach(config => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.style.cssText = `
        fill: none;
        stroke: ${config.color};
        stroke-width: 3;
        stroke-linecap: round;
        opacity: ${config.opacity};
      `;
      svg.appendChild(path);

      // 웨이브 애니메이션
      const createWavePath = (offset) => {
        const points = [];
        for (let i = 0; i <= 1000; i += 10) {
          const x = i;
          const y = 100 + config.amplitude * 
            Math.sin((i * config.period * Math.PI / 1000) + offset + config.phase);
          points.push(`${x},${y}`);
        }
        return `M${points.join(' L')}`;
      };

      anime({
        targets: path,
        d: Array(3).fill(0).map((_, i) => ({
          value: createWavePath(i * 2 * Math.PI / 3)
        })),
        easing: 'linear',
        duration: 3000 + config.period * 1000,
        loop: true
      });
    });
  },

  createPathTransform(container) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 200 200');
    svg.style.cssText = `
      width: 200px;
      height: 200px;
      margin: auto;
      display: block;
      overflow: visible;
    `;
    container.appendChild(svg);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.style.cssText = `
      fill: none;
      stroke: #FF4B4B;
      stroke-width: 4;
      stroke-linecap: round;
    `;
    svg.appendChild(path);

    // 더 복잡하고 흥미로운 경로 변환
    anime({
      targets: path,
      d: [
        { value: 'M40,100 L160,100' }, // 직선
        { value: 'M40,100 Q100,40 160,100' }, // 곡선
        { value: 'M40,100 C60,40 140,160 160,100' }, // S자 곡선
        { value: 'M40,100 C60,40 60,160 100,100 S140,40 160,100' }, // 복잡한 곡선
        { value: 'M40,100 L160,100' } // 다시 직선으로
      ],
      duration: 3000,
      easing: 'easeInOutSine',
      loop: true
    });

    // 보조 점 추가
    const dots = [
      { cx: 40, cy: 100 },
      { cx: 160, cy: 100 }
    ];

    dots.forEach(dot => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', dot.cx);
      circle.setAttribute('cy', dot.cy);
      circle.setAttribute('r', '4');
      circle.style.fill = '#FF4B4B';
      svg.appendChild(circle);
    });
  },

  createLogoAnimation(container) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.style.cssText = `
      width: 100px;
      height: 100px;
      margin: auto;
      display: block;
    `;
    container.appendChild(svg);

    const elements = [
      { type: 'circle', cx: 50, cy: 50, r: 20 },
      { type: 'rect', x: 20, y: 20, width: 20, height: 20 },
      { type: 'rect', x: 60, y: 20, width: 20, height: 20 }
    ];

    elements.forEach(el => {
      const shape = document.createElementNS('http://www.w3.org/2000/svg', el.type);
      Object.entries(el).forEach(([attr, value]) => {
        if (attr !== 'type') {
          shape.setAttribute(attr, value);
        }
      });
      shape.setAttribute('fill', '#FF4B4B');
      svg.appendChild(shape);
    });

    anime({
      targets: svg.children,
      scale: [1, 1.2],
      rotate: [0, 360],
      opacity: [1, 0.5],
      delay: anime.stagger(200),
      duration: 1500,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad'
    });
  },

  createStaggerGrid(container) {
    const grid = document.createElement('div');
    grid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 5px;
      width: 200px;
      height: 200px;
    `;
    container.appendChild(grid);

    for (let i = 0; i < 100; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.style.cssText = `
        background: #FF4B4B;
        width: 100%;
        height: 100%;
        opacity: 0.3;
      `;
      grid.appendChild(cell);
    }

    anime({
      targets: '.grid-cell',
      scale: [0.3, 1],
      opacity: [0.3, 0.8],
      delay: anime.stagger(50, {grid: [10, 10], from: 'center'}),
      direction: 'alternate',
      loop: true
    });
  },

  createPathFollower(container) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 200 100');
    svg.style.cssText = 'width: 100%; height: 100px;';
    container.appendChild(svg);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M20,50 C20,20 180,80 180,50');
    path.setAttribute('stroke', '#FF4B4B');
    path.setAttribute('stroke-width', '1');
    path.setAttribute('fill', 'none');
    svg.appendChild(path);

    const follower = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    follower.setAttribute('r', '5');
    follower.setAttribute('fill', '#FF4B4B');
    svg.appendChild(follower);

    anime({
      targets: follower,
      duration: 2000,
      loop: true,
      easing: 'linear',
      update: function(anim) {
        const point = path.getPointAtLength(anim.progress * path.getTotalLength() / 100);
        follower.setAttribute('cx', point.x);
        follower.setAttribute('cy', point.y);
      }
    });
  },

  createLayeredAnimation(container) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position: relative;
      width: 200px;
      height: 200px;
      margin: auto;
      perspective: 1000px;
    `;
    container.appendChild(wrapper);

    // 여러 레이어 생성
    const colors = ['#FF4B4B', '#7B61FF', '#61FFB4'];
    colors.forEach((color, i) => {
      const layer = document.createElement('div');
      layer.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${color};
        opacity: 0.7;
        border-radius: 10px;
        transform: translateZ(${i * -20}px);
      `;
      wrapper.appendChild(layer);
    });

    // 레이어 애니메이션
    anime({
      targets: wrapper.children,
      rotate: [
        { value: '1turn', duration: 2000 },
        { value: '0turn', duration: 2000 }
      ],
      translateZ: {
        value: [0, 100],
        duration: 2000,
        delay: anime.stagger(200)
      },
      opacity: {
        value: [0.7, 0.3],
        duration: 2000,
        direction: 'alternate'
      },
      delay: anime.stagger(200),
      loop: true,
      easing: 'easeInOutSine'
    });
  },

  createColorAnimation(container) {
    const colorBox = document.createElement('div');
    colorBox.style.cssText = `
      width: 100px;
      height: 100px;
      background: #FF4B4B;
      margin: auto;
    `;
    container.appendChild(colorBox);

    anime({
      targets: colorBox,
      background: [
        { value: '#FF4B4B' },
        { value: '#7B61FF' },
        { value: '#61FFB4' },
        { value: '#FF4B4B' }
      ],
      duration: 2000,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true
    });
  },

  createEaseAnimation(container) {
    const ball = document.createElement('div');
    ball.style.cssText = `
      width: 30px;
      height: 30px;
      background: #FF4B4B;
      border-radius: 50%;
    `;
    container.appendChild(ball);

    anime({
      targets: ball,
      translateX: ['-150px', '150px'],
      duration: 2000,
      direction: 'alternate',
      loop: true,
      easing: 'cubicBezier(0.445, 0.050, 0.550, 0.950)'
    });
  },

  createComplexAnimation(container) {
    const element = document.createElement('div');
    element.style.cssText = `
      width: 50px;
      height: 50px;
      background: #FF4B4B;
      border-radius: 5px;
    `;
    container.appendChild(element);

    anime({
      targets: element,
      translateX: {
        value: 200,
        duration: 1000,
        easing: 'easeInOutSine'
      },
      rotate: {
        value: 360,
        duration: 1000,
        easing: 'easeInOutQuad'
      },
      scale: {
        value: 1.5,
        duration: 1000,
        easing: 'easeInOutExpo'
      },
      delay: function(el, i, l) { return i * 100; },
      direction: 'alternate',
      loop: true
    });
  },

  createAdvancedStagger(container) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      width: 200px;
      margin: auto;
    `;
    container.appendChild(wrapper);

    for (let i = 0; i < 64; i++) {
      const el = document.createElement('div');
      el.className = 'stagger-element';
      el.style.cssText = `
        width: 20px;
        height: 20px;
        background: #FF4B4B;
        border-radius: 2px;
      `;
      wrapper.appendChild(el);
    }

    anime({
      targets: '.stagger-element',
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(200, {grid: [8, 8], from: 'center'}),
      loop: true
    });
  },

  createMGSLogoAnimation(container) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.style.width = '100px';
    svg.style.height = '100px';
    container.appendChild(svg);

    const paths = [
      'M20,20 L80,20',
      'M20,50 L80,50',
      'M20,80 L80,80'
    ];

    paths.forEach(d => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('stroke', '#FF4B4B');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('fill', 'none');
      svg.appendChild(path);
    });

    anime({
      targets: 'path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  },

  createColorTest(container) {
    const boxes = document.createElement('div');
    boxes.style.cssText = `
      display: flex;
      justify-content: center;
      gap: 20px;
    `;
    container.appendChild(boxes);

    for (let i = 0; i < 3; i++) {
      const box = document.createElement('div');
      box.style.cssText = `
        width: 50px;
        height: 50px;
        background: #FF4B4B;
      `;
      boxes.appendChild(box);
    }

    anime({
      targets: boxes.children,
      backgroundColor: [
        { value: '#FF4B4B' },
        { value: '#7B61FF' },
        { value: '#61FFB4' }
      ],
      duration: 2000,
      delay: anime.stagger(200),
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad'
    });
  },

  createTimeControl(container) {
    const timeline = anime.timeline({
      loop: true,
      direction: 'alternate'
    });

    const box = document.createElement('div');
    box.style.cssText = `
      width: 50px;
      height: 50px;
      background: #FF4B4B;
      margin: auto;
    `;
    container.appendChild(box);

    timeline
      .add({
        targets: box,
        translateX: 200,
        duration: 1000,
        easing: 'easeInOutQuad'
      })
      .add({
        targets: box,
        rotate: 360,
        duration: 1000,
        easing: 'easeInOutSine'
      })
      .add({
        targets: box,
        scale: 2,
        duration: 1000,
        easing: 'easeInOutExpo'
      });
  },

  createScrollFollower(container) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;
    `;
    container.appendChild(wrapper);

    // 경로 생성
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    path.setAttribute('viewBox', '0 0 1000 200');
    path.style.cssText = `
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    `;
    wrapper.appendChild(path);

    const curve = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    curve.setAttribute('d', 'M0,100 C250,20 750,180 1000,100');
    curve.style.cssText = `
      fill: none;
      stroke: rgba(255, 75, 75, 0.2);
      stroke-width: 2;
    `;
    path.appendChild(curve);

    // 팔로워 요소 생성
    const follower = document.createElement('div');
    follower.style.cssText = `
      position: absolute;
      width: 30px;
      height: 30px;
      background: #FF4B4B;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    `;
    wrapper.appendChild(follower);

    // 경로 따라가기 애니메이션
    const pathLength = curve.getTotalLength();
    let progress = 0;
    
    anime({
      targets: { progress: 0 },
      progress: 1,
      duration: 3000,
      loop: true,
      easing: 'linear',
      update: function(anim) {
        const point = curve.getPointAtLength(anim.progress * pathLength);
        follower.style.transform = `translate(${point.x}px, ${point.y}px)`;
      }
    });

    // 트레일 효과 추가
    for (let i = 0; i < 5; i++) {
      const trail = document.createElement('div');
      trail.style.cssText = `
        position: absolute;
        width: ${20 - i * 3}px;
        height: ${20 - i * 3}px;
        background: #FF4B4B;
        border-radius: 50%;
        opacity: ${0.8 - i * 0.15};
        transform: translate(-50%, -50%);
      `;
      wrapper.appendChild(trail);

      anime({
        targets: { progress: 0 },
        progress: 1,
        duration: 3000,
        loop: true,
        easing: 'linear',
        delay: i * 100,
        update: function(anim) {
          const point = curve.getPointAtLength(anim.progress * pathLength);
          trail.style.transform = `translate(${point.x}px, ${point.y}px)`;
        }
      });
    }
  },

  createKeyframeAnimation(container) {
    const element = document.createElement('div');
    element.style.cssText = `
      width: 40px;
      height: 40px;
      background: #FF4B4B;
      border-radius: 50%;
      margin: auto;
    `;
    container.appendChild(element);

    anime({
      targets: element,
      keyframes: [
        {translateY: -40},
        {translateX: 100},
        {translateY: 40},
        {translateX: 0},
        {translateY: 0}
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: true
    });
  },

  createLayeredElements(container) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position: relative;
      width: 200px;
      height: 200px;
      margin: auto;
    `;
    container.appendChild(wrapper);

    for (let i = 0; i < 10; i++) {
      const el = document.createElement('div');
      el.style.cssText = `
        position: absolute;
        left: 50%;
        top: 50%;
        width: ${20 + i * 10}px;
        height: ${20 + i * 10}px;
        border: 2px solid #FF4B4B;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      `;
      wrapper.appendChild(el);
    }

    anime({
      targets: wrapper.children,
      scale: [
        {value: 0.1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(100),
      loop: true
    });
  },

  createSpeedTest(container) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    `;
    container.appendChild(wrapper);

    const speeds = [1, 2, 4];
    speeds.forEach(speed => {
      const ball = document.createElement('div');
      ball.style.cssText = `
        width: 20px;
        height: 20px;
        background: #FF4B4B;
        border-radius: 50%;
      `;
      wrapper.appendChild(ball);

      anime({
        targets: ball,
        translateY: [-50, 50],
        duration: 1000 / speed,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
      });
    });
  },

  createStaggerDemo(container) {
    const grid = document.createElement('div');
    grid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      width: 200px;
      margin: auto;
    `;
    container.appendChild(grid);

    for (let i = 0; i < 25; i++) {
      const cell = document.createElement('div');
      cell.style.cssText = `
        width: 100%;
        height: 30px;
        background: #FF4B4B;
        opacity: 0.3;
      `;
      grid.appendChild(cell);
    }

    anime({
      targets: grid.children,
      opacity: [0.3, 1],
      scale: [0.5, 1],
      delay: anime.stagger(100, {grid: [5, 5], from: 'center'}),
      direction: 'alternate',
      loop: true
    });
  },

  createEasingTest(container) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    `;
    container.appendChild(wrapper);

    const easings = ['linear', 'easeInOutQuad', 'easeInOutElastic'];
    easings.forEach(easing => {
      const track = document.createElement('div');
      track.style.cssText = `
        width: 100%;
        height: 2px;
        background: rgba(255,75,75,0.2);
        position: relative;
      `;

      const ball = document.createElement('div');
      ball.style.cssText = `
        width: 16px;
        height: 16px;
        background: #FF4B4B;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      `;
      track.appendChild(ball);
      wrapper.appendChild(track);

      anime({
        targets: ball,
        left: ['0%', '100%'],
        duration: 2000,
        direction: 'alternate',
        loop: true,
        easing: easing
      });
    });
  },

  createSVGLinesAnimation(container) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 200 100');
    svg.style.width = '100%';
    svg.style.height = '100px';
    container.appendChild(svg);

    const paths = [
      'M10,90 L190,90',
      'M10,50 L190,50',
      'M10,10 L190,10'
    ];

    paths.forEach(d => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('stroke', '#FF4B4B');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('fill', 'none');
      svg.appendChild(path);
    });

    anime({
      targets: svg.children,
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 2000,
      delay: anime.stagger(200),
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
  },

  createResponsivePath(container) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 200 100');
    svg.style.width = '100%';
    svg.style.height = '100%';
    container.appendChild(svg);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke', '#FF4B4B');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('fill', 'none');
    svg.appendChild(path);

    anime({
      targets: path,
      d: [
        { value: 'M20,50 Q100,20 180,50' },
        { value: 'M20,50 Q100,80 180,50' }
      ],
      duration: 2000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
  },

  createAssemblyAnimation(container) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position: relative;
      width: 200px;
      height: 200px;
      margin: auto;
    `;
    container.appendChild(wrapper);

    // 컴포넌트 요소들 생성
    const components = [
      { shape: 'circle', color: '#FF4B4B' },
      { shape: 'rect', color: '#7B61FF' },
      { shape: 'triangle', color: '#61FFB4' }
    ];

    components.forEach((comp, i) => {
      const el = document.createElement('div');
      el.className = `component-${comp.shape}`;
      el.style.cssText = `
        position: absolute;
        width: 40px;
        height: 40px;
        background: ${comp.color};
        opacity: 0;
        transform: translate(-50%, -50%);
        ${comp.shape === 'circle' ? 'border-radius: 50%;' : ''}
        ${comp.shape === 'triangle' ? 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%);' : ''}
      `;
      wrapper.appendChild(el);
    });

    // 조립 애니메이션
    anime.timeline({
      loop: true
    })
    .add({
      targets: '.component-circle',
      translateX: ['-100%', '50%'],
      translateY: ['100%', '50%'],
      rotate: [180, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutElastic(1, .8)'
    })
    .add({
      targets: '.component-rect',
      translateX: ['200%', '50%'],
      translateY: ['-100%', '50%'],
      rotate: [-180, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutElastic(1, .8)'
    }, '-=800')
    .add({
      targets: '.component-triangle',
      translateX: ['50%', '50%'],
      translateY: ['200%', '50%'],
      scale: [0, 1],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutElastic(1, .8)'
    }, '-=800')
    .add({
      targets: ['.component-circle', '.component-rect', '.component-triangle'],
      scale: [1, 0.8],
      rotate: '1turn',
      duration: 1500,
      delay: anime.stagger(100),
      direction: 'alternate',
      easing: 'easeInOutSine'
    }, '+=500');
  },

  createComponentAnimation(container) {
    const component = document.createElement('div');
    component.className = 'component';
    component.innerHTML = `
      <div style="width: 100%; height: 20px; background: #eee; border-radius: 4px; margin-bottom: 1rem;"></div>
      <div style="width: 70%; height: 16px; background: #eee; border-radius: 4px; margin-bottom: 0.5rem;"></div>
      <div style="width: 40%; height: 16px; background: #eee; border-radius: 4px;"></div>
    `;
    container.appendChild(component);

    // 컴포넌트 애니메이션
    anime({
      targets: component,
      translateY: [-10, 10],
      scale: [0.98, 1.02],
      duration: 2000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad'
    });
  },

  createAspectRatioChange(container) {
    const component = document.createElement('div');
    component.className = 'component';
    component.style.cssText = `
      width: 300px;
      height: 200px;
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 20px;
    `;
    
    // 컴포넌트 내용 추가
    const header = document.createElement('div');
    header.style.cssText = `
      width: 100%;
      height: 24px;
      background: #eee;
      border-radius: 4px;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
      flex: 1;
      background: #eee;
      border-radius: 4px;
    `;
    
    component.appendChild(header);
    component.appendChild(content);
    container.appendChild(component);

    // 가로/세로 비율 변경 애니메이션
    anime.timeline({
      loop: true,
      easing: 'easeInOutQuart'
    })
    .add({
      targets: component,
      width: ['300px', '200px'],
      height: ['200px', '300px'],
      duration: 1500,
      delay: 1000
    })
    .add({
      targets: component,
      width: ['200px', '300px'],
      height: ['300px', '200px'],
      duration: 1500,
      delay: 1000
    });
  },

  createDepthAddition(container) {
    const component = document.createElement('div');
    component.className = 'component';
    component.style.cssText = `
      width: 250px;
      height: 150px;
      margin: auto;
      transform-style: preserve-3d;
      perspective: 1000px;
    `;

    // 레이어 추가
    const layers = ['back', 'middle', 'front'].map((layer, i) => {
      const div = document.createElement('div');
      div.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        background: white;
        border-radius: 8px;
        padding: 20px;
        box-sizing: border-box;
        transform: translateZ(${i * 20}px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      `;
      
      // 레이어 내용
      div.innerHTML = `
        <div style="width: 100%; height: 16px; background: #eee; border-radius: 4px; margin-bottom: 12px;"></div>
        <div style="width: 60%; height: 16px; background: #eee; border-radius: 4px;"></div>
      `;
      
      return div;
    });

    layers.forEach(layer => component.appendChild(layer));
    container.appendChild(component);

    // 3D 회전 애니메이션
    anime({
      targets: component,
      rotateX: [-5, 5],
      rotateY: [-10, 10],
      duration: 3000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
  },

  createFlowAnimation(container) {
    const component = document.createElement('div');
    component.className = 'component';
    component.style.cssText = `
      width: 280px;
      height: 180px;
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 24px;
      overflow: hidden;
    `;

    // 흐르는 요소들 생성
    for (let i = 0; i < 3; i++) {
      const item = document.createElement('div');
      item.style.cssText = `
        display: flex;
        align-items: center;
        gap: 12px;
        transform: translateX(-100%);
      `;

      const circle = document.createElement('div');
      circle.style.cssText = `
        width: 32px;
        height: 32px;
        background: #eee;
        border-radius: 50%;
      `;

      const lines = document.createElement('div');
      lines.style.cssText = `
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
      `;

      lines.innerHTML = `
        <div style="width: 100%; height: 12px; background: #eee; border-radius: 4px;"></div>
        <div style="width: 60%; height: 12px; background: #eee; border-radius: 4px;"></div>
      `;

      item.appendChild(circle);
      item.appendChild(lines);
      component.appendChild(item);
    }
    container.appendChild(component);

    // 흐름 애니메이션
    anime({
      targets: component.children,
      translateX: ['100%', '0%'],
      opacity: [0, 1],
      delay: anime.stagger(200),
      duration: 800,
      endDelay: 1000,
      direction: 'alternate',
      loop: true,
      easing: 'easeOutQuart'
    });
  },

  createLayoutTransformation(container) {
    const component = document.createElement('div');
    component.className = 'component';
    component.style.cssText = `
      width: 300px;
      height: 200px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      padding: 20px;
    `;

    // 그리드 아이템 생성
    for (let i = 0; i < 4; i++) {
      const item = document.createElement('div');
      item.style.cssText = `
        background: #eee;
        border-radius: 4px;
        min-height: 60px;
      `;
      component.appendChild(item);
    }
    container.appendChild(component);

    // 레이아웃 변환 애니메이션
    const layouts = [
      'grid-template-columns: repeat(2, 1fr)',
      'grid-template-columns: repeat(1, 1fr)',
      'grid-template-columns: repeat(4, 1fr)',
      'grid-template-columns: repeat(2, 1fr)'
    ];

    let currentLayout = 0;
    
    anime({
      targets: component,
      keyframes: layouts.map(layout => ({
        style: { gridTemplateColumns: layout },
        duration: 1000,
        endDelay: 500
      })),
      duration: 6000,
      loop: true,
      easing: 'easeInOutQuart'
    });
  },

  createAdvancedStagger2(container) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 4px;
      width: 300px;
      margin: auto;
    `;
    container.appendChild(wrapper);

    for (let i = 0; i < 100; i++) {
      const el = document.createElement('div');
      el.style.cssText = `
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        background: #FF4B4B;
        opacity: 0.2;
      `;
      wrapper.appendChild(el);
    }

    anime({
      targets: wrapper.children,
      scale: [
        {value: 0.1, easing: 'easeOutSine'},
        {value: 1, easing: 'easeInOutQuad'}
      ],
      delay: anime.stagger(100, {
        grid: [10, 10],
        from: 'center',
        axis: 'x'
      }),
      loop: true,
      direction: 'alternate'
    });
  },

  createDirectionsTest(container) {
    const box = document.createElement('div');
    box.style.cssText = `
      width: 50px;
      height: 50px;
      background: #FF4B4B;
      margin: auto;
    `;
    container.appendChild(box);

    anime({
      targets: box,
      translateX: [
        {value: 200, duration: 1000},
        {value: -200, duration: 1000},
        {value: 0, duration: 1000}
      ],
      rotate: {
        value: '1turn',
        duration: 3000,
      },
      loop: true
    });
  },

  createStressTest(container) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      display: grid;
      grid-template-columns: repeat(20, 1fr);
      gap: 2px;
      width: 400px;
      margin: auto;
    `;
    container.appendChild(wrapper);

    // 많은 수의 요소 생성 (400개)
    for (let i = 0; i < 400; i++) {
      const el = document.createElement('div');
      el.style.cssText = `
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        background: #FF4B4B;
        opacity: 0.1;
      `;
      wrapper.appendChild(el);
    }

    anime({
      targets: wrapper.children,
      scale: [0.5, 1],
      opacity: [0.1, 0.5],
      delay: anime.stagger(10, {
        grid: [20, 20],
        from: 'center'
      }),
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad'
    });
  },

  createEaseVisualizer(container) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position: relative;
      width: 100%;
      height: 200px;
    `;
    container.appendChild(wrapper);

    const easings = ['linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad'];
    const colors = ['#FF4B4B', '#7B61FF', '#61FFB4', '#FFB461'];

    easings.forEach((easing, i) => {
      const ball = document.createElement('div');
      ball.style.cssText = `
        position: absolute;
        width: 20px;
        height: 20px;
        background: ${colors[i]};
        border-radius: 50%;
        top: ${50 * i}px;
      `;
      wrapper.appendChild(ball);

      anime({
        targets: ball,
        translateX: ['0px', '100%'],
        duration: 2000,
        easing: easing,
        direction: 'alternate',
        loop: true
      });
    });
  },

  createCallbackDemo(container) {
    const box = document.createElement('div');
    box.style.cssText = `
      width: 50px;
      height: 50px;
      background: #FF4B4B;
      margin: auto;
    `;
    container.appendChild(box);

    anime({
      targets: box,
      translateX: 200,
      rotate: '1turn',
      duration: 1500,
      direction: 'alternate',
      loop: true,
      update: function(anim) {
        // 진행률에 따라 색상 변경
        const hue = Math.floor(anim.progress * 3.6);
        box.style.background = `hsl(${hue}, 100%, 60%)`;
      }
    });
  },

  createComplexMotion(container) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      position: relative;
      width: 300px;
      height: 200px;
      margin: auto;
    `;
    container.appendChild(wrapper);

    const ball = document.createElement('div');
    ball.style.cssText = `
      position: absolute;
      width: 20px;
      height: 20px;
      background: #FF4B4B;
      border-radius: 50%;
    `;
    wrapper.appendChild(ball);

    anime({
      targets: ball,
      translateX: [
        { value: 250, duration: 1000, delay: 500 },
        { value: 0, duration: 1000, delay: 500 }
      ],
      translateY: [
        { value: -100, duration: 500 },
        { value: 100, duration: 500, delay: 1000 },
        { value: 0, duration: 500, delay: 1000 }
      ],
      rotate: {
        value: '2turn',
        duration: 2000,
      },
      loop: true,
      easing: 'easeInOutSine'
    });
  }
};

export default animations; 