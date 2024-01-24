import loadingGif from "@assets/loading.gif";
import hpComponents from "@assets/hp-bf064tx/components.png";
import hpCover from "@assets/hp-bf064tx/cover.png";

export function AppModule() {
  return {
    entry: app,
    styles: [import("./app.styles.css")],
    templateHTML: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="hp-model-name mt-4">HP Pavilion bf064tx</h1>
          <div class="slider-container">
            <br />
            <input type="range" id="slider" value="100" style="width: 30%" />
          </div>
          <div class="gif-loading-container">
            <img src="${loadingGif}" alt="loading" id="gif-loading" />
          </div>
          <div class="img-laptop-container"></div>
        </div>
      </div>
    </div>
  `,
  };
}

function app() {
  $("#slider").on("input", function () {
    $("#img-cover").css("opacity", ($("input").val() / 100) * 1.0);
  });
  $(".img-laptop-container").html(`
    <img src="${hpComponents}" alt="components" id="img-components" class="img-laptop">
    <img src="${hpCover}" alt="cover" id="img-cover" class="img-laptop">
  `);
  $("#img-cover").on("load", function () {
    $(".gif-loading-container").css("display", "none");
    $(".img-laptop-container").css("display", "block");
    $(".img-laptop-container").animate(
      {
        left: "10%",
        opacity: "1",
      },
      1800
    );
  });

  // (async function getLaptopImages() {
  //   $.ajax({
  //     url: "../src/app/ajax/hp-bf064tx.txt",
  //     type: "get",
  //     async: true,
  //     cache: true,
  //     success: function (data) {
  //       $(".img-laptop-container").html(data);
  //       $("#img-cover").on("load", function () {
  //         $(".gif-loading-container").css("display", "none");
  //         $(".img-laptop-container").css("display", "block");
  //         $(".img-laptop-container").animate(
  //           {
  //             left: "10%",
  //             opacity: "1",
  //           },
  //           1800
  //         );
  //       });
  //     },
  //   });
  // })();
}
