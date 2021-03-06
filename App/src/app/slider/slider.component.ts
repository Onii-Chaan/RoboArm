import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { sliders } from "../sliders";
import { BtService } from "../bt.service";
import { Input } from "@angular/core";

@Component({
    selector: "ns-slider",
    templateUrl: "./slider.component.html",
    styleUrls: ["./slider.component.css"],
    moduleId: module.id,
})
export class SliderComponent implements OnInit {
    slider = sliders;

    constructor(private route: ActivatedRoute, private bt: BtService) {}

    @Input() compId: number;

    ngOnInit(): void {
        // this.route.paramMap.subscribe( params =>{
        //     this.slider = sliders[+params.get('id')];
        // }
        // );
    }

    sliderInput(args) {
        //reads slider value from input
        this.slider[this.compId].value = args.value;
        this.sendOut();
    }

    btBuild(value) {
        //builds bt send out data
        if (value >= 100) return value.toString();
        else if (value >= 10 && value < 100) return "0" + value.toString();
        else return "00" + value.toString();
    }

    oneUp() {
        this.slider[this.compId].value += this.addValue(1, false);
        this.sendOut();
    }

    oneDown() {
        this.slider[this.compId].value -= this.addValue(1, true);
        this.sendOut();
    }

    sendOut() {
        this.bt.sendBTData(
            "<" +
                (this.compId + 1) +
                this.btBuild(this.slider[this.compId].value) +
                ">"
        );
    }

    addValue(add, subtr) {
        if (
            this.slider[this.compId].value + add <= this.slider[this.compId].maxValue && !subtr ||
            this.slider[this.compId].value - add >= this.slider[this.compId].minValue && subtr
        )
            return add;
        return 0;
    }
}
