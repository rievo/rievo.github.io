

const time = 3; //(s)

let minLimit = 6 *1000;
let maxLimit = 9 * 1000;
const transitionSpeed = 400;
const scrollTime = 500;

let experiences = [];
let indexForExperiences = [];

let publications = [];


prepareInterface()

populateExperiences();
loadExperiences();

populatePublications();
loadPublications();

//prepare3dterrain();

function prepareInterface(){
    $("#portfolio-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#exp-cont").offset().top
        }, scrollTime);
    });


    $("#publications-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#pub-cont").offset().top
        }, scrollTime);
    });
}

function populateExperiences(){
    let exp_gr = new Experience({
        title:"Ground Service", 
    description:"Creation of a microservice that provides heightmaps based on terrain queries.",
    highlights:["It extracts information from LAS files, in particular from the Spanish IGN (Instituto Geográfico Nacional)","Then, the service generates a matrix of tiles with heightmaps", "When the service receives a list of coordinates, it generates the minimum heightmap image that holds all of them",
     "In addition to the height map, RGB information of the ground color is stored, also in the form of images", "More layers could be added in the future. For example, it can be combined with machine learning techniques to make annotations in the field (e.g. buildings, water, forests ...)"], 
    techs: ["Node.js", "Tree.js", "GIS", "Microservices", "Image processing", "3D"],
    img_urls: ["./imgs/groundcaptures/ground3d1.png","./imgs/groundcaptures/ground3d2.png","./imgs/groundcaptures/ground3d3.png","./imgs/groundcaptures/ground3d4.jpg","./imgs/groundcaptures/ground3d5.jpg","./imgs/groundcaptures/ground3d6.jpg","./imgs/groundcaptures/ground3d7.jpg","./imgs/groundcaptures/ground3d8.jpg"]
    });
    exp_gr.id = "ground-e"
    experiences.push(exp_gr);

    let exp_sar = new Experience({title:"SARA: An Architecture for Shared-Augmented Reality experiences and Applications", 
    description:"SARA presents three main strengths. First, it allows building AR-based collaborative applications regardless of the end-devices (mobile or wearable ones). SARA is also able to automatically orchestrate the rules for the collaboration policy needed for the target application. ",
    highlights:["Cross-platform, multiuser Augmented Reality collaboration", "Higlhy Scalable", "The collaboration models can be changed on-the-fly", "More collaboration models could be defined by the user", "SARA has been successfully integrated into the Blender environment. Thanks to the created addon, any 3D scene can be injected in a SARA session"],
    techs:["Node.js", "C#", "Javascript", "HoloLens", "Unity 3D", "MRTK", "iOS", "ARKit", "Software Architecture", "Microservices"],
    img_urls: ["./imgs/sara_capturethreedevices.PNG"]});
    exp_sar.id = "sara-e"
    experiences.push(exp_sar);

    let exp_harp = new Experience({title:"HARP: An Architecture for Haptically Enhanced AR Experiences", 
    description:"The objetive of this architecture is to enhance the perception of AR 3D content, while facilitating the generation of applications and allowing various types of haptic devices to be integrated.",
    highlights:["Exploring the concept of Harptics","This architecture is implemented as a new layer over SARA."],
    techs:["C#", "HoloLens", "Unity 3D", "MRTK", "UHDK5", "UltraHaptics", "wearable AR", "Software Architecture", "HCI", "Mid-air", "HMD"],
    img_urls:["./imgs/harp.jpg"]});
    exp_harp.id = "harp-e"
    experiences.push(exp_harp);

    let exp_mds = new Experience({title:"Mission Definition System web editor", 
    description:"Description here",
    highlights:["The user can create multiple geometrical inspections", "Then, takeoff and landing points for the mission are specified", "The system generates an estimation of the trajectory that follows the shape of the inspections"],
    techs:["Javascript", "Three.js", "jQuery", "MongoDB", "Mongoose", "GIS"],
    img_urls:["./imgs/mdscaptures/4.png", "./imgs/mdscaptures/1.png", "./imgs/mdscaptures/2.png", "./imgs/mdscaptures/3.png", "./imgs/mdscaptures/5.png", "./imgs/mdscaptures/mdsinterface.png"]});
    exp_mds.id = "mds-e"
    experiences.push(exp_mds);

    let exp_antennas = new Experience({title:"A Distributed Drone-Oriented Architecture for In-Flight Object Detection", 
    description:"This is cloud-based architecture that enables real-time video streaming and bundled object detection in a remote control center, taking advantage of the availability of high-speed cellular networks for communications.",
    highlights:["The architecture  is ready to handle different types of drones", "To show its capabilities, the architecture is instantiated for a specific use case: the inspection of a telecommunication tower.", "The detection model can be easily changed in real time", "Multiple detection models may be combined (e.g. one detecting antennas and one detecting pedestrians)"],
    techs:["Python", "Tensorflow", "D3.js", "Object Detection", "Machine Learning", "CNNs", "Real time"],
    img_urls:["./imgs/antennas.png"]});
    exp_antennas.id = "antennas-e"
    experiences.push(exp_antennas);

    let exp_diagram = new Experience({title:"DSL-Comet: A Domain Specific Language visual editor", 
    description:"DSL-comet is an iOS tool that allows graphical, collaborative modelling on mobile devices.",
    highlights:["Our architecture permits creating both Sirius and mobile editors from a single description", "Models can be stored locally or in a server, and they are compatible with EMF","Geographic information can be integrated in the model"],
    techs:["iOS", "Node.js", "MongoDB", "Mongoose", "Graphs", "DSL"],
    img_urls:["./imgs/dsl-comet/dsl-comet1.PNG","./imgs/dsl-comet/dsl-comet2.PNG","./imgs/dsl-comet/dsl-comet3.PNG","./imgs/dsl-comet/dsl-comet4.PNG","./imgs/dsl-comet/dsl-comet5.PNG","./imgs/dsl-comet/dsl-comet6.PNG",]});
    exp_diagram.id = "diagram-e"
    experiences.push(exp_diagram);

    let exp_data_icgc = new Experience({
        title:"Data mining from the International Cancer Genome Consortium",
        description:"Use of binary clustering and biclustering techniques in order to find underlying relationships between the catalogs of mutations in the human genome associated with various projects hosted by the International Genome Cancer Consortium",
        highlights:["In the three projects involved in the study, clusters with the 12 families of genes with the most mutations have been identified", "A subset of 5 cytobands have been identified that should be the subject of future studies to clarify their relationship with the development of liver cancer", "The process can be extended to other types of tumors offered in the ICGC catalog", "A tool has been developed to visualize the position of mutations within human chromosomes"],
        techs:["Data Analysis", "Data visualization", "Clustering", "Processing", "Three.js" ],
        img_urls:["./imgs/mutations/lihcus.png", "./imgs/mutations/doncit_us.png", "./imgs/mutations/licafr.png", "./imgs/mutations/lincjp.png"]
    })
    exp_data_icgc.id = "icgc-e"
    experiences.push(exp_data_icgc)
}

function loadExperiences(){
    
    let container = $("#exp-cont");
    for(let i = 0; i< experiences.length; i++){
        let e = experiences[i];
       


        indexForExperiences.push(0);
        let div_exp = $('<div class="experience" id="' + e.id +'"></div>').appendTo(container);
     

        let exp_middle = $('<div class="experience-middle"></div>').appendTo(div_exp);


        exp_middle.append('<p class="exp-title">' + e.title + '</p>');
        exp_middle.append('<p class="extract">' + e.description + '</p>');
    
        let highlights_div = $('<div class="highlights"></div>').appendTo(exp_middle);
   

        let hl_list = $("<ul></ul>").appendTo(highlights_div);
        
        for(let i = 0; i < e.highlights.length; i++){
            hl_list.append('<li>' + e.highlights[i] + '</li>')
        }

        let techs_div = $('<div class="technologies"></div>').appendTo(exp_middle);
   
        let tec_list =  $("<ul></ul>").appendTo(techs_div);
        
        for(let i = 0; i < e.techs.length; i++){
            tec_list.append('<li>' + e.techs[i] + '</li>')
        }
        


        let exp_right_div = $('<div class="experience-right"></div>').appendTo(div_exp);
        if(e.img_urls != undefined){
            let img_right = $('<img id="img-e-'+ i +'" src="' + e.img_urls[0] + '">').appendTo(exp_right_div);

            

            //Prepare timer to change if it has multiple images

            if(e.img_urls.length > 1){
                prepareTimerForExperience(e, (Math.random() * (maxLimit - minLimit) + minLimit));
            }
            

            img_right.click(function(){
                

                //Add class to exp_right_div

                let res = $("#modal-div").hasClass("hidden")

                if(res == true){
                    
                    $("#modal-div").removeClass("hidden");
                    $("#modal-div").addClass("visible");

                    let index = indexForExperiences[e.id]
                    $("#modal-div-img").attr("src",e.img_urls[index]);
                }/*else{
                    
                    $("#modal-div").removeClass("visible");
                    $("#modal-div").addClass("hidden");
                }*/

                
             });

             $("#modal-div").click(function(){
                

                //Add class to exp_right_div

                let res = $("#modal-div").hasClass("visible")

                if(res == true){
                    $("#modal-div").removeClass("visible");
                    $("#modal-div").addClass("hidden");
                    $("#modal-div-img").removeAttr('src')
                }

                
             });

           
        }
    
    }


    prepare3dterrain()
}


function prepareTimerForExperience(exp, time){
    var timer = setInterval(updateImage, time);

    function updateImage() {

        let nextIndex = indexForExperiences[exp.id] + 1;
        if(nextIndex >= exp.img_urls.length){
            nextIndex = 0;
        }


        $("#img-e-"+ exp.id).animate({
            opacity: 0.0
          }, transitionSpeed, function() {
            // Animation complete.

            $("#img-e-"+ exp.id).attr("src",exp.img_urls[nextIndex]);
            indexForExperiences[exp.id] = nextIndex;

            $("#img-e-"+ exp.id).animate({
                opacity: 1.0
              }, transitionSpeed, function() {
              });
          });
        

           
          
       
          

        
    }
}



function populatePublications(){

    let pub = new Publication({
        title: "Domain-Specific Modelling Using Mobile Devices",
        authorsList: ["Diego Vaquero-Melchor", "Antonio Garmendia", "Esther Guerra", "Juan de Lara"],
        details: "ICSOFT (Selected Papers) 2016: 221-238",
        year: 2016,
        link: "https://www.researchgate.net/profile/Juan_Lara/publication/318344097_Domain-Specific_Modelling_Using_Mobile_Devices/links/5ae928fea6fdcc03cd8f8d66/Domain-Specific-Modelling-Using-Mobile-Devices.pdf"
    })
    publications.push(pub);

    pub = new Publication({
        title: "Towards Enabling Mobile Domain-specific Modelling",
        authorsList: ["Diego Vaquero-Melchor", "Antonio Garmendia", "Esther Guerra", "Juan de Lara"],
        details: "ICSOFT-PT 2016: 117-122",
        year: 2016,
        link: "https://repositorio.uam.es/bitstream/handle/10486/675261/towards_vaquero_ICSOFT_2016_11.pdf?sequence=1"
    })
    publications.push(pub);

    pub = new Publication({
        title: "Active Domain-Specific Languages: Making Every Mobile User a Modeller",
        authorsList: ["Diego Vaquero-Melchor", "Javier Palomares", "Esther Guerra", "Juan de Lara"],
        details: "MoDELS 2017: 75-82",
        year:2017,
        link: "https://www.miso.es/pubs/MODELS_DSLComet_2017.pdf"
    })
    publications.push(pub);


    pub = new Publication({
        title: "Holo-mis: a mixed reality based drone mission definition system",
        authorsList: ["Diego Vaquero-Melchor", "Jorge García-Hospital", "Ana M. Bernardos", "Juan A. Besada", "José R. Casar"],
        details: "MobileHCI Adjunct 2018: 365-370",
        year:2018,
        link: "https://dl.acm.org/doi/abs/10.1145/3236112.3236165"
    })
    publications.push(pub);


    pub = new Publication({
        title: "A Distributed Drone-Oriented Architecture for In-Flight Object Detection",
        authorsList: ["Diego Vaquero-Melchor", "Iván Campaña", "Ana M. Bernardos", "Luca Bergesio", "Juan A. Besada"],
        details: "HAIS 2018: 433-445",
        year:2018,
        link: "https://www.researchgate.net/publication/325623134_A_Distributed_Drone-Oriented_Architecture_for_In-Flight_Object_Detection"
    })
    publications.push(pub);


    pub = new Publication({
        title: "Drone Mission Definition and Implementation for Automated Infrastructure Inspection Using Airborne",
        authorsList: ["Juan A. Besada","Luca Bergesio","Iván Campaña","Diego Vaquero-Melchor","Jaime López-Araquistain","Ana M. Bernardos","José R. Casar"],
        details: "Sensors 18(4): 1170 (2018)",
        year:2018,
        link: "https://www.mdpi.com/1424-8220/18/4/1170/pdf"
    })
    publications.push(pub);



    pub = new Publication({
        title: "Drones-as-a-service: A management architecture to provide mission planning, resource brokerage and operation support for fleets of drones",
        authorsList: ["Juan A. Besada","Ana M. Bernardos","Luca Bergesio","Diego Vaquero-Melchor","Iván Campaña","José R. Casar"],
        details: "PerCom Workshops 2019: 931-936",
        year:2019,
        link: "https://ieeexplore.ieee.org/document/8730838"
    })
    publications.push(pub);


    pub = new Publication({
        title: "Alternative interaction techniques for drone-based mission definition: from desktop UI to wearable AR",
        authorsList: ["Diego Vaquero-Melchor", "Ana M. Bernardos"],
        details: "MUM 2019: 51:1-51:5",
        year:2019,
        link: "https://dl.acm.org/doi/abs/10.1145/3365610.3368420"
    })
    publications.push(pub);

    pub = new Publication({
        title: "Enhancing Interaction with Augmented Reality through Mid-Air Haptic Feedback: Architecture Design and User Feedback",
        authorsList: ["Diego Vaquero-Melchor", "Ana M. Bernardos"],
        details: "Applied Sciences 9 (23), 5123",
        year:2019,
        link: "https://www.mdpi.com/2076-3417/9/23/5123"
    })
    publications.push(pub);

    pub = new Publication({
        title: "SARA: A Microservice-Based Architecture for Cross-Platform Collaborative Augmented Reality",
        authorsList: ["Diego Vaquero-Melchor", "Ana M. Bernardos", "Luca Bergesio"],
        details: "Applied Sciences, 10(6), 2074",
        year:2020,
        link: "https://www.mdpi.com/2076-3417/10/6/2074"
    })
    publications.push(pub);

    pub = new Publication({
        title: "Doctoral Thesis: Technologies and concepts for enhancing interaction and enabling collaboration in augmented and mixed reality",
        authorsList: ["Diego Vaquero-Melchor"],
        details: "https://doi.org/10.20868/UPM.thesis.65850",
        year:2020,
        link: "https://oa.upm.es/65850/"
    })
    publications.push(pub);

    publications.reverse()

}

function loadPublications(){

    let container = $("#pub-cont");
    /*
    <div class="publication">
				<p class="p-title"></p>
				<p class="p-authors"></p>
				<p class="p-details"></p>
				<p class="p-year"></p>
			</div>
    */

   for(let i = 0; i< publications.length; i++){
       let p = publications[i];


       let pub_div = $('<div class="publication"></div>').appendTo(container);


       let title_p = $('<p class="p-title"></p>').appendTo(pub_div);
       title_p.text(p.title);

       let authors_p = $('<p class="p-authors"></p>').appendTo(pub_div);
       //authors_p.text(p.title);
       let authorsstr = ""
       for(let j = 0; j< p.authorsList.length; j++){
           authorsstr = authorsstr +"<span>"+ p.authorsList[j] + "</span>";
           if(j != p.authorsList.length-1){
               authorsstr +=", "
           }
       }
       authors_p.html(authorsstr);

       let details_p = $('<p class="p-details"></p>').appendTo(pub_div);
       details_p.text(p.details);

       let year_p = $('<p class="p-year"></p>').appendTo(pub_div);
       year_p.text(p.year);


       if(p.link != undefined && p.link.length != 0){
        let link_p = $(' <a class="p-ref" href="' + p.link +'">Link</a> ').appendTo(pub_div);
        link_p.html(p.link_p);
       }

       

       
   }
}

function prepare3dterrain(){
    $("#ground-e").append('<div id="terrain-3d" ></div>')
    let terrain_viewer = new TerrainLayer('terrain-3d', 400, 400);
    terrain_viewer.setup();
    terrain_viewer.mountScene(undefined);
}