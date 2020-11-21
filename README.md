# Virtual-Art-Gallery
Developing a scene of a seemingly endless art gallery in VR.
The problem statement is to develop a virtual art gallery scene in VR. The art gallery
consists of a seemingly endless corridor with paintings on both sides of it. The user is
expected to enter the gallery and walk through it endlessly. Thus, a 3D scene is expected
to be created using some repetitive pattern to give a sense of an endless scene.

## Highlights
- The approach is to first create a static art gallery VR scene to get a better visualization of the scene. 
- The task is to make the scene dynamic, i.e depending on the visitor’s position and movement in VR environment, the gallery should also change its orientation so that the gallery seems endless to the visitor.
- Assuming the visitor only moves in forward direction with respect to gallery, the gallery should be reconstructed repeatedly in such a way that the part already traversed by the visitor disappears.

##  To run the scene
- Initially, the visitor will have to adjust itself to face the gallery.
- Cursor movement will be handled using wasd keys and arrow keys.

## Functionality
- Initially the points are generated using NewPoint API.
- Next, we have generated the points to left and right of the original points at equal distance using Co-ordinate Geometry.
- Then the walls are built dynamically considering the points generated above.
- Visitor can traverse through the corridor infinitely.
