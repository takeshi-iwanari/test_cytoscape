var cy = window.cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,

  style: [
    {
      selector: 'node',
      css: {
        "label": "data(text)",
        "font-size": "10",
        "text-wrap": "wrap",
        "width": "20",
        "height": "20",
      }
    },

    {
      "selector": ".result",
      "style": {
        "text-valign": "center",
        "text-halign": "right",

      }
    },
    {
      selector: ':parent',
      css: {
        'label': '',
        'shape': 'round-rectangle',
      }
    },
    {
      "selector": ".external",
      "style": {
        "text-valign": "top",
        "text-halign": "center",
        'shape': 'round-rectangle',
        "width": "10",
        "height": "10",
        "background-color": "#333",
      }
    },
    {
      selector: 'edge',
      css: {
        "source-label": "data(text)",
        "source-text-offset": 25,
        "font-size": "10",
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        "text-background-color": "#FFF",
        "text-background-opacity": "0.8",
        
      }
    }
  ],

  elements: {
    nodes: [
      { data: { id: 'Sensing_box' } },
      { data: { id: 'Localization_box' } },
      { data: { id: 'Perception_box' } },
      { data: { id: 'Planning_box' } },
      { data: { id: 'Control_box' } },
      { data: { id: 'Vehicle_box' } },
      { data: { id: 'System_box' } },

      { data: { id: 'Sensing', parent: 'Sensing_box' , text: "Sensing\n10/20"},
        classes: 'result',
        position: { x: 0, y: 0 }
      },
      { data: { id: 'Localization', parent: 'Localization_box' , text: "Localization\n10/20"},
        classes: 'result',
        position: { x: 0, y: 100 }
      },
      { data: { id: 'Perception', parent: 'Perception_box' , text: "Perception\n10/20"},
        classes: 'result',
        position: { x: 200, y: 100 }
      },
      { data: { id: 'Planning', parent: 'Planning_box' , text: "Planning\n10/20"},
        classes: 'result',
        position: { x: 200, y: 0 }
      },
      { data: { id: 'Control', parent: 'Control_box' , text: "Control\n10/20"},
        classes: 'result',
        position: { x: 250, y: -100 }
      },
      { data: { id: 'Vehicle', parent: 'Vehicle_box' , text: "Vehicle\n10/20"},
        classes: 'result',
        position: { x: 50, y: -100 }
      },
      { data: { id: 'System', parent: 'System_box' , text: "System\n10/20"},
        classes: 'result',
        position: { x: 150, y: -200 }
      },

      { data: { id: 'Sensing_ext', text: "External"},
        classes: 'external'
      },

      { data: { id: 'Localization_ext', text: "External"},
        classes: 'external'
      },

      { data: { id: 'Perception_ext', text: "External"},
        classes: 'external'
      },

      { data: { id: 'Planning_ext', text: "External"},
        classes: 'external'
      },

      { data: { id: 'Control_ext', text: "External"},
        classes: 'external'
      },

      { data: { id: 'Vehicle_ext', text: "External"},
        classes: 'external'
      },

      { data: { id: 'System_ext', text: "External"},
        classes: 'external'
      },
    ],

    edges: [
      { data: { id: 'sensing_ext', source: 'Sensing_ext', target: 'Sensing_box', text: "10/20" } },
      { data: { id: 'perception_ext', source: 'Perception_ext', target: 'Perception_box', text: "10/20" } },
      { data: { id: 'localization_ext', source: 'Localization_ext', target: 'Localization_box', text: "10/20" } },
      { data: { id: 'planning_ext', source: 'Planning_ext', target: 'Planning_box', text: "10/20" } },
      { data: { id: 'control_ext', source: 'Control_ext', target: 'Control_box', text: "10/20" } },
      { data: { id: 'system_ext', source: 'System_ext', target: 'System_box', text: "10/20" } },
      { data: { id: 'vehicle_ext', source: 'Vehicle_ext', target: 'Vehicle_box', text: "10/20" } },


      { data: { id: 'sensing2localization', source: 'Sensing_box', target: 'Localization_box', text: "10/20" } },
      { data: { id: 'sensing2perception', source: 'Sensing_box', target: 'Perception_box', text: "10/20" } },
      { data: { id: 'sensing2planning', source: 'Sensing_box', target: 'Planning_box', text: "10/20" } },
      { data: { id: 'perception2planning', source: 'Perception_box', target: 'Planning_box', text: "10/20" } },
      { data: { id: 'localization2perception', source: 'Localization_box', target: 'Perception_box', text: "10/20" } },
      { data: { id: 'localization2planning', source: 'Localization_box', target: 'Planning_box', text: "10/20" } },
      // { data: { id: 'localization2control', source: 'Localization_box', target: 'Control_box', text: "10/20" } },
      { data: { id: 'planning2control', source: 'Planning_box', target: 'Control_box', text: "10/20" } },
      { data: { id: 'control2vehicle', source: 'Control_box', target: 'Vehicle_box', text: "10/20" } },
      { data: { id: 'vehicle2control', source: 'Vehicle_box', target: 'Control_box', text: "10/20" } },
      { data: { id: 'vehicle2sensing', source: 'Vehicle_box', target: 'Sensing_box', text: "10/20" } },

      { data: { id: 'vehicle2system', source: 'Vehicle_box', target: 'System_box', text: "10/20" } },
      { data: { id: 'control2system', source: 'Control_box', target: 'System_box', text: "10/20" } },
      { data: { id: 'system2control', source: 'System_box', target: 'Control_box', text: "10/20" } },
      // { data: { id: 'localization2system', source: 'Localization_box', target: 'System_box', text: "10/20" } },
      
    ]
  },

  layout: {
    name: 'preset',
    padding: 5,
    fit: false
  },
  zoom: 2,
  pan: { x: 300, y: 600 },
});

cy.getElementById('Sensing_ext').position('x', cy.getElementById('Sensing_box').position('x') - 100)
cy.getElementById('Sensing_ext').position('y', cy.getElementById('Sensing_box').position('y'))
cy.getElementById('Localization_ext').position('x', cy.getElementById('Localization_box').position('x') - 100)
cy.getElementById('Localization_ext').position('y', cy.getElementById('Localization_box').position('y'))
cy.getElementById('Perception_ext').position('x', cy.getElementById('Perception_box').position('x') + 100)
cy.getElementById('Perception_ext').position('y', cy.getElementById('Perception_box').position('y'))
cy.getElementById('Planning_ext').position('x', cy.getElementById('Planning_box').position('x') + 100)
cy.getElementById('Planning_ext').position('y', cy.getElementById('Planning_box').position('y'))
cy.getElementById('Control_ext').position('x', cy.getElementById('Control_box').position('x') + 100)
cy.getElementById('Control_ext').position('y', cy.getElementById('Control_box').position('y'))
cy.getElementById('Vehicle_ext').position('x', cy.getElementById('Vehicle_box').position('x') - 100)
cy.getElementById('Vehicle_ext').position('y', cy.getElementById('Vehicle_box').position('y'))
cy.getElementById('System_ext').position('x', cy.getElementById('System_box').position('x') - 100)
cy.getElementById('System_ext').position('y', cy.getElementById('System_box').position('y'))