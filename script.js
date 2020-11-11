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
      color:{type:'color',default:'blue'},
      mydata : {type:'array'}
    },
    init: function () {
      // This will be called after the entity has properly attached and loaded.
      var data = this.data;
      var pos = this.data.mydata[1];
      //data.width = 10;
      this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    curr.object3D.position.set(pos, 0, -35*(this.data.mydata[0]));
    //entityEl.object3D.position.z += (3*-35);
    curr.object3D.rotation.y = THREE.Math.degToRad(90);
    curr.setObject3D('mesh', this.mesh);
    
      console.log('I am ready!');
      console.log(this.data.mydata);
    }
  });
  AFRAME.registerComponent('do-something-once', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'},
      width:{type : 'number' , default : 20},
       height:{type : 'number' , default : 5}, 
       depth:{type : 'number' , default : 1},
      color:{type:'color',default:'blue'},
      mydata : {type:'array'}
    },
    init: function () {
      // This will be called after the entity has properly attached and loaded.
      var data = this.data;
      var pos = this.data.mydata[1];
      //data.width = 10;
      this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    lft.object3D.position.set(pos, 0, -35*(this.data.mydata[0]));
    //entityEl.object3D.position.z += (3*-35);
    lft.object3D.rotation.y = THREE.Math.degToRad(90);
    lft.setObject3D('mesh', this.mesh);
    
      console.log('I am ready!');
      console.log(this.data.mydata);
    }
  });
 // for(var i=1; i<=3; ++i){

    //console.log(i);
    //console.log(i);
    
  var curr = document.createElement('a-box');
  curr.setAttribute('do-something-once-loaded',{mydata:[2,5]});
  sceneEl.appendChild(curr);
  var lft = document.createElement('a-box');
  lft.setAttribute('do-something-once',{mydata:[2,-5]});
  sceneEl.appendChild(lft);
 
 // }





