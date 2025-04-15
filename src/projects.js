'use strict'

// プロジェクトのフィルタリング関連のロジック処理
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
categories.addEventListener('click', (e) => {
  const filter = e.target.dataset.category;
  if(filter == null) {
    return;
  }

  handleActionSelection(e.target);
  
  filterProjects(filter);
});

function handleActionSelection(target) {
  // Active メニューを再設定
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  projects.forEach(project => {
    if(filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  projectsContainer.classList.add('animation--out');
  setTimeout(() => {
    projectsContainer.classList.remove('animation--out');
  },250);
}