var sceneEl = document.querySelector('a-scene');
//console.log(sceneEl.querySelector('a-box'));
  var el = sceneEl.querySelector('#boxer');
  el.setAttribute('material',{color:'red'});
  
  AFRAME.registerComponent('do-something-once-loaded', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'},
      width:{type : 'number' , default : 20},
       height:{type : 'number' , default : 5}, 
       depth:{type : 'number' , default : 1},
      color:{type:'color',default:'blue'}
    },
    init: function () {
      // This will be called after the entity has properly attached and loaded.
      var data = this.data;
      this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    curr.object3D.position.set(-5, 0, -35);
    //entityEl.object3D.position.z += (3*-35);
    curr.object3D.rotation.y = THREE.Math.degToRad(90);
    curr.setObject3D('mesh', this.mesh);
    
      console.log('I am ready!');
    }
  });
  for(var i=1; i<=3; ++i){
  var curr = document.createElement('a-box');
  curr.setAttribute('do-something-once-loaded','');
  sceneEl.appendChild(curr);
  }





