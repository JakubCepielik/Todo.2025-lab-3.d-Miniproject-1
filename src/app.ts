import { TodoBoostrapTheme,TodoBulmaTheme, TodoComponent } from "./components/todo";

const appEl = document.getElementById('app');

const todoWrapper = document.createElement('div');
todoWrapper.setAttribute('id', 'my-list');

appEl?.appendChild(todoWrapper);

const todo = new TodoComponent({
    theme: TodoBulmaTheme
});

todo.mount(todoWrapper)
