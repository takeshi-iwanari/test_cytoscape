var cy = window.cy = cytoscape({
  container: document.getElementById("cy"),

  style: [
    {
      selector: "node",
      style: {
        "label": "data(text)",
        "font-size": "10",
        "text-wrap": "wrap",
        "width": "20",
        "height": "20",
      }
    },
    {
      selector: ":parent",
      style: {
        "label": "",
        "shape": "round-rectangle",
      }
    },
    {
      selector: ".result",
      style: {
        "text-valign": "center",
        "text-halign": "right",
      }
    },
    {
      selector: ".external",
      style: {
        "text-valign": "top",
        "text-halign": "center",
        "shape": "round-rectangle",
        "width": "10",
        "height": "10",
        "background-color": "#333",
      }
    },
    {
      selector: "edge",
      style: {
        "source-label": "data(text)",
        "source-text-offset": 25,
        "source-text-margin-y": 10,
        "font-size": "10",
        "curve-style": "bezier",
        "target-arrow-shape": "triangle",
        "text-background-color": "#FFF",
        "text-background-opacity": "0.8",
      }
    },
    {
      selector: ".pass",
      style: {
        "background-color": "#0F0",
        "line-color": "#0F0",
        "target-arrow-color": "#0F0",
      }
    },
    {
      selector: ".failed",
      style: {
        "background-color": "#F00",
        "line-color": "#F00",
        "target-arrow-color": "#F00",
      }
    },
  ],

  elements: {
    nodes: [
      { data: { id: "sensing_box" } },
      { data: { id: "localization_box" } },
      { data: { id: "perception_box" } },
      { data: { id: "planning_box" } },
      { data: { id: "control_box" } },
      { data: { id: "vehicle_box" } },
      { data: { id: "system_box" } },

      { data: { id: "sensing", parent: "sensing_box" , text: "sensing\n0/0"},
        classes: "result",
      },
      { data: { id: "localization", parent: "localization_box" , text: "localization\n0/0"},
        classes: "result",
      },
      { data: { id: "perception", parent: "perception_box" , text: "perception\n0/0"},
        classes: "result",
      },
      { data: { id: "planning", parent: "planning_box" , text: "planning\n0/0"},
        classes: "result",
      },
      { data: { id: "control", parent: "control_box" , text: "control\n0/0"},
        classes: "result",
      },
      { data: { id: "vehicle", parent: "vehicle_box" , text: "vehicle\n0/0"},
        classes: "result",
      },
      { data: { id: "system", parent: "system_box" , text: "system\n0/0"},
        classes: "result",
      },

      { data: { id: "sensing_ext", text: "External"},
        classes: "external"
      },

      { data: { id: "localization_ext", text: "External"},
        classes: "external"
      },

      { data: { id: "perception_ext", text: "External"},
        classes: "external"
      },

      { data: { id: "planning_ext", text: "External"},
        classes: "external"
      },

      { data: { id: "control_ext", text: "External"},
        classes: "external"
      },

      { data: { id: "vehicle_ext", text: "External"},
        classes: "external"
      },

      { data: { id: "system_ext", text: "External"},
        classes: "external"
      },
    ],

    edges: [
      // { data: { id: "sensing_ext", source: "sensing_ext", target: "sensing_box", text: "10/20" } },
    ]
  },

  // layout: {
  //   name: "preset",
  //   padding: 5,
  // },
  // zoom: 2,
  // pan: { x: 300, y: 600 },
});

cy.getElementById("sensing").position({"x": 0, "y": 0});
cy.getElementById("localization").position({"x": 0, "y": 100});
cy.getElementById("perception").position({"x": 200, "y": 100});
cy.getElementById("planning").position({"x": 200, "y": 0});
cy.getElementById("control").position({"x": 250, "y": -100});
cy.getElementById("vehicle").position({"x": 50, "y": -100});
cy.getElementById("system").position({"x": 150, "y": -200});

cy.getElementById("sensing_ext").position("x", cy.getElementById("sensing_box").position("x") - 100);
cy.getElementById("sensing_ext").position("y", cy.getElementById("sensing_box").position("y"));
cy.getElementById("localization_ext").position("x", cy.getElementById("localization_box").position("x") - 100);
cy.getElementById("localization_ext").position("y", cy.getElementById("localization_box").position("y"));
cy.getElementById("perception_ext").position("x", cy.getElementById("perception_box").position("x") + 100);
cy.getElementById("perception_ext").position("y", cy.getElementById("perception_box").position("y"));
cy.getElementById("planning_ext").position("x", cy.getElementById("planning_box").position("x") + 100);
cy.getElementById("planning_ext").position("y", cy.getElementById("planning_box").position("y"));
cy.getElementById("control_ext").position("x", cy.getElementById("control_box").position("x") + 100);
cy.getElementById("control_ext").position("y", cy.getElementById("control_box").position("y"));
cy.getElementById("vehicle_ext").position("x", cy.getElementById("vehicle_box").position("x") - 100);
cy.getElementById("vehicle_ext").position("y", cy.getElementById("vehicle_box").position("y"));
cy.getElementById("system_ext").position("x", cy.getElementById("system_box").position("x") - 100);
cy.getElementById("system_ext").position("y", cy.getElementById("system_box").position("y"));

cy.add([
  { group: "edges", data: { id: "ext2sensing", source: "sensing_ext", target: "sensing_box", text: "10/20" } },
  { group: "edges", data: { id: "ext2sensing", source: "sensing_ext", target: "sensing_box", text: "10/20" } },
  { group: "edges", data: { id: "ext2perception", source: "perception_ext", target: "perception_box", text: "10/20" } },
  { group: "edges", data: { id: "ext2localization", source: "localization_ext", target: "localization_box", text: "10/20" } },
  { group: "edges", data: { id: "ext2planning", source: "planning_ext", target: "planning_box", text: "10/20" } },
  { group: "edges", data: { id: "ext2control", source: "control_ext", target: "control_box", text: "10/20" } },
  { group: "edges", data: { id: "ext2system", source: "system_ext", target: "system_box", text: "10/20" } },
  { group: "edges", data: { id: "ext2vehicle", source: "vehicle_ext", target: "vehicle_box", text: "10/20" } },
]);

cy.add([
  { group: "edges", data: { id: "sensing2localization", source: "sensing_box", target: "localization_box", text: "10/20" } },
  { group: "edges", data: { id: "sensing2perception", source: "sensing_box", target: "perception_box", text: "10/20" } },
  { group: "edges", data: { id: "sensing2planning", source: "sensing_box", target: "planning_box", text: "10/20" } },
  { group: "edges", data: { id: "perception2planning", source: "perception_box", target: "planning_box", text: "10/20" } },
  { group: "edges", data: { id: "localization2perception", source: "localization_box", target: "perception_box", text: "10/20" } },
  { group: "edges", data: { id: "localization2planning", source: "localization_box", target: "planning_box", text: "10/20" } },
  { group: "edges", data: { id: "localization2control", source: "localization_box", target: "control_box", text: "10/20" } },
  { group: "edges", data: { id: "planning2control", source: "planning_box", target: "control_box", text: "10/20" } },
  { group: "edges", data: { id: "control2vehicle", source: "control_box", target: "vehicle_box", text: "10/20" } },
  { group: "edges", data: { id: "vehicle2control", source: "vehicle_box", target: "control_box", text: "10/20" } },
  { group: "edges", data: { id: "vehicle2sensing", source: "vehicle_box", target: "sensing_box", text: "10/20" } },
  { group: "edges", data: { id: "vehicle2system", source: "vehicle_box", target: "system_box", text: "10/20" } },
  { group: "edges", data: { id: "control2system", source: "control_box", target: "system_box", text: "10/20" } },
  { group: "edges", data: { id: "system2control", source: "system_box", target: "control_box", text: "10/20" } },
  { group: "edges", data: { id: "localization2system", source: "localization_box", target: "system_box", text: "10/20" } },
]);

cy.fit();
cy.zoomingEnabled(false);
cy.panningEnabled(false);
cy.boxSelectionEnabled(false);
cy.nodes().lock();
cy.nodes().unselectify();
cy.edges().lock();
cy.edges().unselectify();

for (let node_name in node_result) {
  let html = node_result[node_name].html;
  let num_total = node_result[node_name].num_total;
  let num_passed = node_result[node_name].num_passed;
  let class_name = num_total == num_passed ? "pass" : "failed";
  cy.getElementById(node_name).data("text", node_name + "\n" + num_passed + "/" + num_total);
  cy.getElementById(node_name).addClass(class_name);
  cy.getElementById(node_name).data("html", html);
  cy.getElementById(node_name + "_box").data("html", html);
}

for (let edge_name in edge_result) {
  let html = edge_result[edge_name].html;
  let num_total = edge_result[edge_name].num_total;
  let num_passed = edge_result[edge_name].num_passed;
  let class_name = num_total == num_passed ? "pass" : "failed";
  cy.getElementById(edge_name).data("text", num_passed + "/" + num_total);
  cy.getElementById(edge_name).addClass(class_name);
  cy.getElementById(edge_name).data("html", html);
}

cy.on("tap", "node", function(evt){
  let node = evt.target;
  let html = node.data("html");
  window.open(html, "_blank");
});

cy.on("tap", "edge", function(evt){
  var edge = evt.target;
  let html = edge.data("html");
  window.open(html, "_blank");
});

