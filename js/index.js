import Impresi from "../src/impresi/impresi";

let impresi;
let isCreateByConfig = true;

//There are two ways to create slides, by config or by code. Below shows examples of both ways
if(isCreateByConfig){
  createByConfig(impresi);
} else{
  createByCode(impresi);
}


function createByCode(impresi) {
  impresi = new Impresi("board");
  //create resources
  let b1 = impresi.createBackground({
    imageUrl:
      "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/KoFb-cag.jpg"
  });
  let b1h1 = impresi.createHeading(
    "Christchurch Art Gallery Website User Testing",
    {
      inAnimationName: "slideInUp",
      fontSize: 3
    }
  );
  let b1b1 = impresi.createBlurb("Yoobee Web & UX Design Class of 2019", {
    inAnimationName: "slideInUp",
    width: 100,
    x: 10,
    y: 20
  });
  let b2 = impresi.createBackground({
    imageUrl:
      "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/u4o4-ux-testing.jpg"
  });

  let b2h1 = impresi.createHeading("Second heading", {
    inAnimationName: "slideInUp"
  });
  let b2b1 = impresi.createBlurb("This is a blurb for the second heading", {
    inAnimationName: "slideInUp",
    x: 50,
    y: 10
  });
  let b2b2 = impresi.createBlurb("This is another blurb for the second heading", {
    inAnimationName: "slideInUp",
    x: 50,
    y: 20
  });
  let b3 = impresi.createBackground({
    bgColor: "#ccc"
  });
  let b3h1 = impresi.createHeading("Thank you :)", {
    inAnimationName: "slideInUp",
    x: 37,
    y: 20
  });

  //add actions
  impresi
    .addActions({ "in": [b1, b1h1, b1b1] })
    .addActions({"out": [b1, b1h1, b1b1], "in": [b2, b2h1, b2b1]})
    .addActions({ "in": [b2b2] })
    .addActions({ "out": [b2, b2h1, b2b1, b2b2], "in": [b3, b3h1] });

    impresi.start();
}

function createByConfig(impresi) {
  let resources = {
    "resources": [
      {
        "id": "b1",
        "type": "background",
        "options": {
          "imageUrl": "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/KoFb-cag.jpg"
        }
      },
      {
        "id": "b1h1",
        "type": "heading",
        "text": "Christchurch Art Gallery Website User Testing",
        "options": {
          "inAnimationName": "slideInUp",
          "fontSize": 3
        }
      },
      {
        "id": "b1b1",
        "type": "blurb",
        "text": "Yoobee Web & UX Design Class of 2019",
        "options": {
          "inAnimationName": "slideInUp",
          "width": 100,
          "x": 10,
          "y": 20
        }
      }, {
        "id": "b2",
        "type": "background",
        "options": {
          "imageUrl": "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/u4o4-ux-testing.jpg"
        }
      },
      {
        "id": "b2h1",
        "type": "heading",
        "text": "Second heading",
        "options": {
          "inAnimationName": "slideInUp"
        }
      },
      {
        "id": "b2b1",
        "type": "blurb",
        "text": "This is a blurb for the second heading",
        "options": {
          "inAnimationName": "slideInUp",
          "x": 50,
          "y": 10
        }
      },
      {
        "id": "b2b2",
        "type": "blurb",
        "text": "This is another blurb for the second heading",
        "options": {
          "inAnimationName": "slideInUp",
          "x": 50,
          "y": 20
        }
      }, {
        "id": "b3",
        "type": "background",
        "options": {
          "bgColor": "#ccc"
        }

      }, {
        "id": "b3h1",
        "type": "heading",
        "text": "Thank You :)",
        "options": {
          inAnimationName: "slideInUp",
          x: 37,
          y: 20
        }
      }
    ],
    "actions": [
      { "in": ["b1", "b1h1", "b1b1"] },
      {
        "out": ["b1", "b1h1", "b1b1"], "in": ["b2", "b2h1", "b2b1"]
      },
      {
        "in": ["b2b2"]
      },
      {
        "in": ["b2", "b2h1", "b2b1", "b2b2"], in: ["b3", "b3h1"]
      }
    ]
  };
  impresi = new Impresi("board", resources);
  impresi.start();
}