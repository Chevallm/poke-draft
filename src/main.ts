import './style.css';

const startBtn = document.querySelector('#start');

function start(): void {
  hideScene('menu');
  showScene('pokemon-draft');
}

function hideScene(sceneName: string): void {
  const scene = getScene(sceneName);
  if (scene) {
    scene.classList.remove('scene--active');
  } else {
    console.error('no scene');
  }
}

function showScene(sceneName: string): void {
  const scene = getScene(sceneName);
  if (scene) {
    scene.classList.add('scene--active');
  } else {
    console.error('no scene');
  }
}

function getScene(sceneName: string): Element | null {
  return document.querySelector(`#${sceneName}`);
}

function draft(): void {
  
}

startBtn!.addEventListener('click', start);
start();
draft();
