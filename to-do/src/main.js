import './style.css';

document.querySelector('#add').onclick = (evt) => {
  const item = document.querySelector('#list-template').cloneNode(true).firstElementChild;
  console.log(item)
  const list = document.querySelector('#list');
  item.querySelector('.content input').addEventListener('keyup', (evt) => {
  console.log(evt.keyCode)
    if (evt.keyCode === 13) {
      item.querySelector('.content span').textContent = item.querySelector('.content input').value;
      item.querySelector('.content span').style.display = 'inline';
      item.querySelector('.content input').style.display = 'none';
    }
  });

  item.querySelector('.del').onclick = () => item.remove();
  item.querySelector('.edit').onclick = () => {
    item.querySelector('.content span').style.display = 'none';
    item.querySelector('.content input').style.display = 'inline-block';
  };
  item.querySelector('.done').onclick = () => {
    if (item.querySelector('.content span').style.textDecoration === "line-through") {
      item.querySelector('.content span').style.textDecoration = "none"; 
    } else {
      item.querySelector('.content span').style.textDecoration = "line-through"; 
    }
  };
  list.appendChild(item)
}
