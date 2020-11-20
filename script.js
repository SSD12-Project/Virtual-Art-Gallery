var sceneEl = document.querySelector('a-scene');
//console.log(sceneEl.querySelector('a-box'));
  var el = sceneEl.querySelector('#camid');
 // el.setAttribute('material',{color:'red'});
 /* el.object3D.rotation.set(
    THREE.Math.degToRad(15),
    THREE.Math.degToRad(30),
    THREE.Math.degToRad(90)
  );
  el.object3D.rotation.x += Math.PI;*/
  
  // With .setAttribute (less recommended).
 // el.setAttribute('rotation', {x: 90, y: 0, z: 90});

  function store_cord(xval,zval,array)
  {
      array.push({x:xval,z:zval});
      console.log('ok');
  }

  points=[]
  AFRAME.registerComponent('do-something-once-loaded-1', {
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
      data.width = this.data.mydata[2];
      //data.width = 10;
      this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    curr1.object3D.position.set(pos, 0, (this.data.mydata[0]));
    //entityEl.object3D.position.z += (3*-35);
    curr1.object3D.rotation.y = THREE.Math.degToRad(-1*this.data.mydata[3]);
    curr1.setObject3D('mesh', this.mesh);
    
      console.log('I am ready!');
      console.log(this.data.mydata);
    }
  });
  AFRAME.registerComponent('do-something-once-1', {
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
      data.width = this.data.mydata[2];
      //data.width = 10;
      this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    lft1.object3D.position.set(pos, 0, (this.data.mydata[0]));
    //entityEl.object3D.position.z += (3*-35);
    lft1.object3D.rotation.y = THREE.Math.degToRad(-1*this.data.mydata[3]);
    lft1.setObject3D('mesh', this.mesh);
    
      console.log('I am ready!');
      console.log(this.data.mydata);
    }
  });
  AFRAME.registerComponent('do-something-once-loaded-2', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'},
      width:{type : 'number' , default : 20},
       height:{type : 'number' , default : 5}, 
       depth:{type : 'number' , default : 1},
      color:{type:'color',default:'yellow'},
      mydata : {type:'array'}
    },
    init: function () {
      // This will be called after the entity has properly attached and loaded.
      var data = this.data;
      var pos = this.data.mydata[1];
      data.width = this.data.mydata[2];
      //data.width = 10;
      this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    curr2.object3D.position.set(pos, 0, (this.data.mydata[0]));
    //entityEl.object3D.position.z += (3*-35);
    curr2.object3D.rotation.y = THREE.Math.degToRad(-1*this.data.mydata[3]);
    curr2.setObject3D('mesh', this.mesh);
    
      console.log('I am ready!');
      console.log(this.data.mydata);
    }
  });
  AFRAME.registerComponent('do-something-once-2', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'},
      width:{type : 'number' , default : 20},
       height:{type : 'number' , default : 5}, 
       depth:{type : 'number' , default : 1},
      color:{type:'color',default:'yellow'},
      mydata : {type:'array'}
    },
    init: function () {
      // This will be called after the entity has properly attached and loaded.
      var data = this.data;
      var pos = this.data.mydata[1];
      data.width = this.data.mydata[2];
      //data.width = 10;
      this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    lft2.object3D.position.set(pos, 0,(this.data.mydata[0]));
    //entityEl.object3D.position.z += (3*-35);
    lft2.object3D.rotation.y = THREE.Math.degToRad(-1*this.data.mydata[3]);
    lft2.setObject3D('mesh', this.mesh);
    
      console.log('I am ready!');
      console.log(this.data.mydata);
    }
  });
  AFRAME.registerComponent('do-something-once-loaded-3', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'},
      width:{type : 'number' , default : 20},
       height:{type : 'number' , default : 5}, 
       depth:{type : 'number' , default : 1},
      color:{type:'color',default:'red'},
      mydata : {type:'array'}
    },
    init: function () {
      // This will be called after the entity has properly attached and loaded.
      var data = this.data;
      var pos = this.data.mydata[1];
      data.width = this.data.mydata[2];
      //data.width = 10;
      this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    curr3.object3D.position.set(pos, 0, (this.data.mydata[0]));
    //entityEl.object3D.position.z += (3*-35);
    curr3.object3D.rotation.y = THREE.Math.degToRad(-1*this.data.mydata[3]);
    curr3.setObject3D('mesh', this.mesh);
    
      console.log('I am ready!');
      console.log(this.data.mydata);
    }
  });
  AFRAME.registerComponent('do-something-once-3', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'},
      width:{type : 'number' , default : 20},
       height:{type : 'number' , default : 5}, 
       depth:{type : 'number' , default : 1},
      color:{type:'color',default:'red'},
      mydata : {type:'array'}
    },
    init: function () {
      // This will be called after the entity has properly attached and loaded.
      var data = this.data;
      var pos = this.data.mydata[1];
      data.width = this.data.mydata[2];
      //data.width = 10;
      this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    lft3.object3D.position.set(pos, 0, (this.data.mydata[0]));
    //entityEl.object3D.position.z += (3*-35);
    lft3.object3D.rotation.y = THREE.Math.degToRad(-1*this.data.mydata[3]);
    lft3.setObject3D('mesh', this.mesh);
    
      console.log('I am ready!');
      console.log(this.data.mydata);
    }
  });

  var curr1 = document.createElement('a-box');
  var lft1 = document.createElement('a-box');
  var curr2 = document.createElement('a-box');
  var lft2 = document.createElement('a-box');
  var curr3 = document.createElement('a-box');
  var lft3 = document.createElement('a-box');



  function build_wall(wall_coor){

    console.log('inbuildwall');
    console.log(points[1].x);
    el.setAttribute('rotation', {x:  1*points[1].x+(180/Math.PI), y: 0, z: 0});
   // console.log(wall_coor[1]['x']);
    var x1l = (wall_coor[7]['x']+wall_coor[5]['x'])/2;
    var z1l = (wall_coor[7]['z']+wall_coor[5]['z'])/2;
    var w1l = Math.sqrt(Math.pow((wall_coor[7]['x']-wall_coor[5]['x']),2) + Math.pow((wall_coor[7]['z']-wall_coor[5]['z']),2));
    var s1l = (Math.atan((wall_coor[7]['z']-wall_coor[5]['z'])/(wall_coor[7]['x']-wall_coor[5]['x'])))*(180/Math.PI);
    //var s1l=angle_rot[0]
   
    var x1r = (wall_coor[8]['x']+wall_coor[6]['x'])/2;
    var z1r = (wall_coor[8]['z']+wall_coor[6]['z'])/2;
    var w1r = Math.sqrt(Math.pow((wall_coor[8]['x']-wall_coor[6]['x']),2) + Math.pow((wall_coor[8]['z']-wall_coor[6]['z']),2));
    var s1r = (Math.atan((wall_coor[8]['z']-wall_coor[6]['z'])/(wall_coor[8]['x']-wall_coor[6]['x'])))*(180/Math.PI);
    //var s1r=angle_rot[0]

    var x2l = (wall_coor[3]['x']+wall_coor[1]['x'])/2;
    var z2l = (wall_coor[3]['z']+wall_coor[1]['z'])/2;
    var w2l = Math.sqrt(Math.pow((wall_coor[3]['x']-wall_coor[1]['x']),2) + Math.pow((wall_coor[3]['z']-wall_coor[1]['z']),2));
    var s2l = (Math.atan((wall_coor[3]['z']-wall_coor[1]['z'])/(wall_coor[3]['x']-wall_coor[1]['x'])))*(180/Math.PI);
    //var s2l=angle_rot[1]

    var x2r = (wall_coor[4]['x']+wall_coor[2]['x'])/2;
    var z2r = (wall_coor[4]['z']+wall_coor[2]['z'])/2;
    var w2r = Math.sqrt(Math.pow((wall_coor[4]['z']-wall_coor[2]['z']),2) + Math.pow((wall_coor[4]['x']-wall_coor[2]['x']),2));
    var s2r = (Math.atan((wall_coor[4]['z']-wall_coor[2]['z'])/(wall_coor[4]['x']-wall_coor[2]['x'])))*(180/Math.PI);
    //var s2r=angle_rot[1]

    var x3l = (wall_coor[5]['x']+wall_coor[3]['x'])/2;
    var z3l = (wall_coor[5]['z']+wall_coor[3]['z'])/2;
    var w3l = Math.sqrt(Math.pow((wall_coor[5]['x']-wall_coor[3]['x']),2) + Math.pow((wall_coor[5]['z']-wall_coor[3]['z']),2));
    var s3l = (Math.atan((wall_coor[5]['z']-wall_coor[3]['z'])/(wall_coor[5]['x']-wall_coor[3]['x'])))*(180/Math.PI);
    //var s3l=angle_rot[2]

    var x3r = (wall_coor[6]['x']+wall_coor[4]['x'])/2;
    var z3r = (wall_coor[6]['z']+wall_coor[4]['z'])/2;
    var w3r = Math.sqrt(Math.pow((wall_coor[6]['x']-wall_coor[4]['x']),2) + Math.pow((wall_coor[6]['z']-wall_coor[4]['z']),2));
    var s3r = (Math.atan((wall_coor[6]['z']-wall_coor[4]['z'])/(wall_coor[6]['x']-wall_coor[4]['x'])))*(180/Math.PI);
    //var s3r=angle_rot[2]

    curr1.setAttribute('do-something-once-loaded-1',{mydata:[z1l,x1l,w1l,s1l]});
    sceneEl.appendChild(curr1);
  
    
    lft1.setAttribute('do-something-once-1',{mydata:[z1r,x1r,w1r,s1r]});
    sceneEl.appendChild(lft1);
  
    
    curr2.setAttribute('do-something-once-loaded-2',{mydata:[z2l,x2l,w2l,s2l]});
    sceneEl.appendChild(curr2);
  
   
    lft2.setAttribute('do-something-once-2',{mydata:[z2r,x2r,w2r,s2r]});
    sceneEl.appendChild(lft2);
  
    
    curr3.setAttribute('do-something-once-loaded-3',{mydata:[z3l,x3l,w3l,s3l]});
    sceneEl.appendChild(curr3);
  
   
    lft3.setAttribute('do-something-once-3',{mydata:[z3r,x3r,w3r,s3r]});
    sceneEl.appendChild(lft3);
  
  }


  function extractNewPoint(x,z,beta,length,newbeta)
  {
      var response;
      $.ajax({
          url: "http://pathgen.herokuapp.com/newpoint",
          type: "GET",
          async: false,
          data: {
              x:x,
              z:z,
              beta:beta,
              length:length,
              gennewbeta:newbeta

          },
          success: function(data) {
          response = data
              
          },
          error: function(error){
              console.log(error)
          }
      })
  return response
  }

function store_cord(xval,zval,array)
{
  array.push({x:xval,z:zval});
}

function normalize(forward)
{
  x=forward.x
  z=forward.z
  a=Math.sqrt(Math.pow(x,2)+Math.pow(z,2))
  forward.x= forward.x/a
  forward.z=forward.z/a
  return forward
}

function find_cor(points)
{
  var roadwidth = 10;
  for (var i=0;i<points.length;i++)
  {
  
      if(i<points.length-1)
      {
          forward.x+=(points[i+1].x-points[i].x);
          forward.z+=(points[i+1].z-points[i].z);
      }
      if (i>0)
      {
          forward.x+=points[i].x-points[i-1].x;
          forward.z+=points[i].z-points[i-1].z;
      }
      forward=normalize(forward)
      left.x=-forward.z
      left.z=forward.x 
      //console.log(left) 
      a=points[i].x - (left.x*roadwidth*0.5) 
      b=points[i].z - (left.z*roadwidth*0.5) 
      store_cord(a,b,wall_coor)  //Left Coordinates
      a=points[i].x + (left.x*roadwidth*0.5) 
      b=points[i].z + (left.z*roadwidth*0.5) 
      store_cord(a,b,wall_coor)   //Right Coordinates
  }
  console.log(wall_coor)
  return wall_coor;
} 

function apif(){
  $(document).ready(function() {
           
            
    //main......................................    
     //Initial parameter values
        var x = 0
        var y = 0
        var z = 0
        var beta = 1
        var length = 10
        var newbeta = 1
        var x_new
        var z_new
        points=[]
        //store_cord(0,0,points)
        wall_coor=[]
        
        roadwidth=2 //width of gallery
        forward={x:0,z:0};
        left={x:0,z:0};

        var scene = document.querySelector('a-scene')
        

        for(var i = 1; i<=10; i++)
        {
          //  var line_seg = document.createElement('a-entity')
            store_cord(x,z,points)
            var response=extractNewPoint(x,z,beta,length,newbeta)
            beta = response.new_beta
            x_new = response.new_point[0]
            z_new = response.new_point[1]
                console.log('beta:', beta)
                console.log('x: ', x)
                console.log('z:', z)

          /*  line_seg.setAttribute('line__1', {
                start: {x:x, y:y, z:z},
                end:{x:x_new, y:y, z:z_new},
                color: 'blue'
            })   */
       //     scene.appendChild(line_seg)
            x=x_new
            z=z_new
        
        }
        

        store_cord(0,0,wall_coor)
        wallcords = []
        wallcords = find_cor(points);
        build_wall(wallcords);

    })
    
}




 


 // for(var i=1; i<=3; ++i){
  console.log(apif());
    //console.log(i);
    //console.log(i);
   /* var curr1 = document.createElement('a-box');
    curr1.setAttribute('do-something-once-loaded-1',{mydata:[2,5]});
    sceneEl.appendChild(curr1);
  
    var lft1 = document.createElement('a-box');
    lft1.setAttribute('do-something-once-1',{mydata:[2,-5]});
    sceneEl.appendChild(lft1);*/
   // console.log(find_cor(points));

  //  console.log(points);
   // console.log(find_cor(points));

  
 // }





