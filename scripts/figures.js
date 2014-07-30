if(!!(window.addEventListener)) window.addEventListener('WebComponentsReady', main);
else window.attachEvent('onload', main);

function main(){renderCharts();}

function renderCharts() {
/*
    var dimensionX  = $('#chartElement').width();
    var dimensionY  = $('#chartElement').height();
    var chartCanvas = document.getElementById("figure1");

    alert(dimensionX);
    alert(dimensionY);

    chartCanvas.width  = dimensionX;
    chartCanvas.height = dimensionX;
*/

    var dataFigure1 = [
        {label: "Pharma Company",   title: "PharmaCompany",  value: 48.6,   color: "#004b8d",   highlight: "#004b8d"},
        {label: "Med Comms",        title: "MedComms",       value: 40.5,   color: "#f8991d",   highlight: "#f8991d"},
        {label: "Other",            title: "Other",          value: 7.2,    color: "#a4b2d4",   highlight: "#a4b2d4"},
        {label: "Publisher",        title: "Publisher",      value: 3.6,    color: "#c1c5c9",   highlight: "#c1c5c9"},
        {label: "Device Company",   title: "DeviceCompany",  value: 1,      color: "#ffce90",   highlight: "#ffce90"}
    ];

//    var ctx = document.getElementById("figure1").getContext("2d");
//    new Chart(ctx).Pie(dataFigure1);
//    legend(document.getElementById("figure1Legend"), dataFigure1);



    var dataFigure2a = [
        {label: "Yes",          title: "Yes",           value: 30,    color: "#f8991d",   highlight: "#f8991d"},
        {label: "No",           title: "No",            value: 60,    color: "#004b8d",   highlight: "#004b8d"},
        {label: "Don't Know",   title: "Don't Know",    value: 10,     color: "#a4b2d4",   highlight: "#a4b2d4"}
    ];

    var ctx = document.getElementById("figure2a").getContext("2d");
    new Chart(ctx).Pie(dataFigure2a);
    legend(document.getElementById("figure2aLegend"), dataFigure2a);



    var dataFigure2b = [
        {label: "Yes",          title: "Yes",           value: 50,    color: "#f8991d",   highlight: "#f8991d"},
        {label: "No",           title: "No",            value: 37,    color: "#004b8d",   highlight: "#004b8d"},
        {label: "Don't Know",   title: "Don't Know",    value: 13,    color: "#a4b2d4",   highlight: "#a4b2d4"}
    ];

    var ctx = document.getElementById("figure2b").getContext("2d");
    new Chart(ctx).Pie(dataFigure2a);
    legend(document.getElementById("figure2bLegend"), dataFigure2b);



    var dataFigure3 = [
        {label: "Often",        title: "Often",         value: 6.3,     color: "#f8991d",   highlight: "#f8991d"},
        {label: "Sometimes",    title: "Sometimes",     value: 36.9,    color: "#004b8d",   highlight: "#004b8d"},
        {label: "Never",        title: "Never",         value: 56.8,    color: "#a4b2d4",   highlight: "#a4b2d4"},
        {label: "Always",       title: "Always",        value: 0.5,     color: "#c1c5c9",   highlight: "#c1c5c9"}

    ];

    var ctx = document.getElementById("figure3").getContext("2d");
    new Chart(ctx).Pie(dataFigure3);
    legend(document.getElementById("figure3Legend"), dataFigure3);



    var dataFigure4 = {
        labels : ["Increased Eengagement","Data Dissemination","Metric Tracking","A/V Interactivity"],
        datasets : [
            {
                fillColor :      "#004b8d",
                strokeColor :    "#004b8d",
                highlightFill:   "#004b8d",
                highlightStroke: "#004b8d",
                data : [56, 43, 47, 62]
            }
        ]

    };

    var ctx = document.getElementById("figure4").getContext("2d");
    new Chart(ctx).Bar(dataFigure4);



    var dataFigure5 = {
        labels : ["Increased Resources","Increased Cost","Increased Timelines","Not Appropriate"],
        datasets : [
            {
                fillColor :      "#004b8d",
                strokeColor :    "#004b8d",
                highlightFill:   "#004b8d",
                highlightStroke: "#004b8d",
                data : [80, 75, 56, 8]
            }
        ]

    };

    var ctx = document.getElementById("figure5").getContext("2d");
    new Chart(ctx).Bar(dataFigure5);






    var dataFigure6 = [
        {label: "Associated Costs",             title: "AssociatedCosts",       value: 33.6,    color: "#f8991d",   highlight: "#f8991d"},
        {label: "Sponsor Company Policy",       title: "SponsorPolicy",         value: 9.3,     color: "#004b8d",   highlight: "#004b8d"},
        {label: "Congress Regulations",         title: "CongressRegulations",   value: 27.1,    color: "#a4b2d4",   highlight: "#a4b2d4"},
        {label: "Other",                        title: "Other",                 value: 11.5,    color: "#c1c5c9",   highlight: "#c1c5c9"},
        {label: "Author Presenter Reluctance",  title: "AuthorReluctance",      value: 12.1,    color: "#fcd5a7",   highlight: "#fcd5a7"},
        {label: "Technology Barriers",          title: "TechnologyBarrier",     value: 8.4,     color: "#fceddc",   highlight: "#fceddc"}

    ];

    var ctx = document.getElementById("figure6").getContext("2d");
    new Chart(ctx).Pie(dataFigure6);
    legend(document.getElementById("figure6Legend"), dataFigure6);



    var dataFigure7 = [
        {label: "Congresses will not allow digital posters to replace printed posters", title: "NotAllow",          value: 33.6,    color: "#f8991d",   highlight: "#f8991d"},
        {label: "Congresses will slowly integrate digital poster presentations",        title: "SlowlyIntegrate",   value: 9.3,     color: "#004b8d",   highlight: "#004b8d"},
        {label: "Congresses will move toward all digital poster presentations ",        title: "AllDigital",        value: 27.1,    color: "#a4b2d4",   highlight: "#a4b2d4"},
        {label: "Don't Know",                                                           title: "Don'tKnow",         value: 11.5,    color: "#c1c5c9",   highlight: "#c1c5c9"},
        {label: "Other",                                                                title: "Other",             value: 12.1,    color: "#fcd5a7",   highlight: "#fcd5a7"}

    ];

    var ctx = document.getElementById("figure7").getContext("2d");
    new Chart(ctx).Pie(dataFigure7);
    legend(document.getElementById("figure7Legend"), dataFigure7);


}



