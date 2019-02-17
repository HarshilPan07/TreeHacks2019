// Labels along x-axis
var days = ['Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday', 'Sunday'];

//  Days + emotions recorded
var monday = [1.134, 0.734, 0.012, 0.005];
var tuesday = [1.512, 1.723, -1.025, -0.981];
var wednesday = [-0.874, -1.898, 1.425, 0.988];
var thursday = [-0.925, -1.992, 1.912, 0.567];
var friday = [-1.915, -1.356, 1.999, 1.253];
var saturday = [0.583, 1.245, -0.563, 0.012];
var sunday = [1.224, 0.874, -0.212, -0.671];

//  Puts each emotion into a data set
var happiness = [ monday[0], tuesday[0], wednesday[0], thursday[0], friday[0], saturday[0], sunday[0] ];
var joy = [ monday[1], tuesday[1], wednesday[1], thursday[1], friday[1], saturday[1], sunday[1] ];
var fear = [ monday[2], tuesday[2], wednesday[2], thursday[2], friday[2], saturday[2], sunday[2] ];
var sadness = [ monday[3], tuesday[3], wednesday[3], thursday[3], friday[3], saturday[3], sunday[3] ];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: days,
    datasets: [
      {
        data: happiness,
        label: "Happiness",
        borderColor: "#e5a314",
        fill: 'none'
      },
      {
        data: joy,
        label: "Joy",
        borderColor: "#4ea32a",
        fill: 'none'
      },
      {
        data: fear,
        label: "Fear",
        borderColor:"#000",
        fill: 'none'
      },
      {
        data: sadness,
        label: "Sadness",
        borderColor: "#095dc1",
        fill: 'none'
      },
    ]
  }
});
