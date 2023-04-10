import { planetNames } from "./Widget.js";
import { OptionsSingleton } from "./Options.js";
import { Button } from "./Button.js";

export class NewChart {
  myChart = null;

    constructor(data, option) {
        this.data = data;
        this.option = option;
    }

    createChart() {
        const ctxChart = document.getElementById('сhart');

        if (this.myChart === true) {
          this.myChart.destroy();
        }
        
        const optionName = new OptionsSingleton();
        const option = optionName.getOption(this.option);

        const plugin = {
            id: 'customCanvasBackgroundColor',
            beforeDraw: (chart, args, options) => {
              const {ctx} = chart;
              ctx.save();
              ctx.globalCompositeOperation = 'destination-over';
              ctx.fillStyle = options.color || 'ffffff20';
              ctx.fillRect(0, 0, chart.width, chart.height);
              ctx.restore();
            }
          };

        this.myChart = new Chart(ctxChart, {
          type: 'bar',
          data: {
            labels: planetNames,
            datasets: [{
              label: option,
              data: this.data,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: [
                "#2F7495",
                '#75AEC1',
                '#91D5E0',
                '#B3D4D3',
                '#84C5C4',
                '#7DB9B8',
                '#74C8C7',
                '#2A7B78',
                '#2D5C5A',
              ],
              
              hoverOffset: 4,
            }]
          },
          options: {
            plugins: {
              customCanvasBackgroundColor: {
                color: 'white',
              }
            }
          },
          plugins: [plugin],
        });

        ctxChart.classList.add('animationEmersion');

        const destroyBtn = new Button('.statistics__btn');
        destroyBtn.onClick(() => {
          this.myChart.destroy();
        })

    }

}