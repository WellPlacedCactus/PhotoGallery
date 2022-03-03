
document.querySelector('span').addEventListener('mouseover', function(){
  document.querySelector('div').id = 'twice';
});

document.querySelector('span').addEventListener('mouseout', function(){
  document.querySelector('div').id = '';
});