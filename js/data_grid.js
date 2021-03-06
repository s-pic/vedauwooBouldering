var columnDefs= [
    {field: 'Route Name', minWidth:10, sortable:true, filter:true},
    {field: 'Grade', minWidth:5, sortable:true, filter:true},
    {field: 'Stars', minWidth:5, sortable:true, filter:true},
    {field: 'Description', minWidth:60},
    {field: 'Area', minWidth:5, sortable:true, filter:true},
    {field: 'Sub-Area', minWidth:5, sortable:true, filter:true},       
];

var rowData = [{"Route Name":"Slam Dunk","Grade":"V0","Stars":null,"Description":"Located on the back of the center boulder in the Parking Area. A fun dyno to a loose basketball sized cobble. Top out by moving left for the crack.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":null,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Parking Lot Boulder_231"},{"Route Name":"Unnamed 5.10 Wide","Grade":"5.10","Stars":null,"Description":"Climb the wide crack that is back in the chimney","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":1.0,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_230"},{"Route Name":"Unnamed 5.9 Hand Crack","Grade":"5.9","Stars":null,"Description":"Sit start the hand crack in the chimney","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":1.0,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_230"},{"Route Name":"Happy","Grade":"V1","Stars":null,"Description":"Follow really good edges up the arete","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":null,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_230"},{"Route Name":"Cumulus","Grade":"V10-","Stars":null,"Description":"Follow crimps up the gentle overhang of the prow.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":null,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_70"},{"Route Name":"Lichen Burn","Grade":"5.11","Stars":null,"Description":"Harder than it looks. Sit start the short hand and fist crack in the small roof facing Poland Hill.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":1.0,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_63"},{"Route Name":"Zachary Slab","Grade":"V0","Stars":null,"Description":"Climb the tallest part of the slab using a diagonal seam and jug halfway up.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":null,"Slab Route":1.0,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_229"},{"Route Name":"Lego Man","Grade":"V0","Stars":null,"Description":"This traverse starts on the sloping holds of a short seam on the left end of the wall above some ground juniper. Move right through and finish on the previous problems.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":null,"Slab Route":1.0,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_229"},{"Route Name":"Come Original","Grade":"V6","Stars":null,"Description":"Sit start this problem with the right hand on the semi-good lip and a good foot. Slap up the prow.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":null,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_69"},{"Route Name":"Classically Getting Wider","Grade":"5.11","Stars":null,"Description":"Sit start the hand crack corner. It turns into an off width higher up.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":1.0,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_69"},{"Route Name":"Length Not Girth","Grade":"5.1","Stars":null,"Description":"The tall hand to shaky fist crack.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":1.0,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_69"},{"Route Name":"Unnamed V2","Grade":"V2","Stars":null,"Description":"Sit start the diagonal  flakes.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":null,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_65"},{"Route Name":"Unnamed V0","Grade":"V0","Stars":null,"Description":"Sit start up a shallow flared corner.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":null,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_65"},{"Route Name":"Unnamed 5.10 hand crack flake","Grade":"5.1","Stars":null,"Description":"Sit start the hand crack and flake. 5.9 if started standing.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":1.0,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_65"},{"Route Name":"The Bear Voo","Grade":"V8","Stars":null,"Description":"Finger crack roof that is topped with an awkward, hard finish at the roof's lip.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":1.0,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_65"},{"Route Name":"Spider Tooth Circus Trick","Grade":"5.12-","Stars":null,"Description":"A wide roof cack where two boulders meet. Start on hand jams and work through the wide crack in the middle.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":1.0,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_64"},{"Route Name":"Crumbly Corner","Grade":"V2","Stars":0.0,"Description":"Climb the disintegrating corner.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":null,"Slab Route":null,"GPS Not Done":"x","FA":null,"SpatialID":null},{"Route Name":"Aspen Grove Project","Grade":"Project","Stars":null,"Description":"On the large boulder just left of the Bistro Wall, in the aspen grove. Follow the inclusions around to the lip of the boulder and mantle.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":null,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_67"},{"Route Name":"Bistro Left","Grade":"5.12","Stars":3.0,"Description":"Start in a roof dihedral and climb the crack around a corner. Finish on insecure moves up top.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":1.0,"Crack Route":1.0,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_68"},{"Route Name":"The Bistro","Grade":"5.11","Stars":4.0,"Description":"Classic crack problem through the middle of the Bistro Wall.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":1.0,"Crack Route":1.0,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_68"},{"Route Name":"Poise Colorado","Grade":"5.11","Stars":3.0,"Description":"This is the right-most crack on the Bistro Wall. Start with awkward moves in hte roof to gain purchase on the crack above.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":1.0,"Crack Route":1.0,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_68"},{"Route Name":"Truckers Corner","Grade":"V3","Stars":null,"Description":"Lieback corner and finish on the slab.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":null,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_66"},{"Route Name":"Trucker's Flair","Grade":"5.6","Stars":null,"Description":"Climb the left leaning, flared hand crack. There is a bush growing in the bottom of this crack.","Area":"Poland Hill","Sub-Area":"Bistro Boulders","Dries Quickly":null,"GPS":null,"Highball":null,"Crack Route":1.0,"Slab Route":null,"GPS Not Done":null,"FA":null,"SpatialID":"Bistro Boulders_66"}];


const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    defaultColDef:{
        flex:1,
        minWidth:100
    },
    rowSelection: 'multiple',
    pagination:true
};

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
};

// function onSelectionChanged(){
//     var selectedRows = gridOptions.api.getSelectedRows();
//     var selectedData = selectedRows.map(data => data.SpatialID);
  
//     var test = selectedData.filter(onlyUnique);

//    return test
// };

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

});

function clearFilters(){
    gridOptions.api.setFilterModel(null);
}

function grabFilteredData(){
    let rowData = [];
    gridOptions.api.forEachNodeAfterFilter(node => {
        rowData.push(node.data.SpatialID);
    });
    
    var uniqueID = rowData.filter(onlyUnique);
    
    return uniqueID;
}


