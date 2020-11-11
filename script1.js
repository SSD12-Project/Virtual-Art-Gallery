
    function store_cord(xval,zval,array)
    {
        array.push({x:xval,z:zval});
    }
    points=[]
    store_cord(2.0848417648174937,9.780257400276982,points);
    store_cord(2.1119478168718873,19.7802206633066,points);
    store_cord(5.239440180319134,29.2785779695243,points);
    
    wall_coor=[]
    store_cord(0,0,wall_coor)
    roadwidth=1
    forward={x:0,z:0};
    left={x:0,z:0};
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
        for (var i=0;i<points.length-1;i++)
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
            store_cord(a,b,wall_coor)  
            a=points[i].x + (left.x*roadwidth*0.5) 
            b=points[i].z + (left.z*roadwidth*0.5) 
            store_cord(a,b,wall_coor)   
        }
        console.log(wall_coor)
    }  
    
    find_cor(points)    
