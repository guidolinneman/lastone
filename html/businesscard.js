            // Print dimensions - good to keep ratios as variables throughout!
            var cardH = 400;
            var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

            // additional bleed and padding %
            // use native JavaScript object Math to round - can't have decimals for pixels
            var bleedPadW = Math.round(cardW*0.05);
            var bleedPadH = Math.round(cardH*0.05);

            // dimensions for bleed area
            var bleedXmin = 0;
            var bleedXmax = cardW + (bleedPadW*2);
            var bleedYmin = 0;
            var bleedYmax = cardH + (bleedPadH*2);

            // dims for centered card area
            var cardXmin = 0 + bleedPadW;
            var cardXmax = cardW;
            var cardYmin = 0 + bleedPadH;
            var cardYmax = cardH;

            // dims for centered padding area
            var padXmin = cardXmin + bleedPadW;
            var padXmax = cardXmax - bleedPadW*2;
            var padYmin = cardYmin + bleedPadH;
            var padYmax = cardYmax - bleedPadH*2;


            function setup() {
            createCanvas(bleedXmax, bleedYmax); //width and height of my canvas
            stroke("black");
            rect(bleedXmin, bleedYmin, bleedXmax-1, bleedYmax-1); // minus one to make it visible inside canvas
            stroke("red");
            rect(cardXmin, cardYmin, cardXmax, cardYmax); // centered
            stroke("green");
            rect(padXmin, padYmin, padXmax, padYmax); // centered
            background(15, 25, 255, 10);
            noStroke();


            // careful! see textSize is used by p5.js library, so don't name it as a var
            var fontSizeA = Math.round(cardH/10);
            fill(55);
            textSize(fontSizeA*2);
            text("FRANK", padXmin*5+bleedPadW, padYmax*0.35)
            var fontSizeNorm = Math.round(cardH/14); // maintain aspect ratio with text too
            fill(58, 3, 104);
            textSize(fontSizeNorm);
            text("G. Linneman", padXmin+bleedPadW, padYmax*0.55);
            fill(58, 3, 104); // note color values - try to improve with cymk-style colors
            text("Sales manager", padXmin+bleedPadW, (padYmax*0.55)+fontSizeA);
            fill(58, 3, 104, 51); // note 4th value is alpha (transparency)
            text("P: 06-57567380", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*2));
            fill(58, 3, 104, 51);
            text("E: Guido@frank.nl", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*3));
            // fill(58, 3, 104,)
            // rect(cardW*0.5, cardH*0.15, cardW/2.5, cardH/3, cardW/20);


            // fill(58, 3, 104, 175);
            // ellipse(cardW*0.75, cardH*0.5, cardW/2.25, cardH/1.5);
            // translate(width/2, height/2);
            //rotate(PI / 10);
            // rect(cardW*0.58, cardH*0.03, cardW/2.5, cardH/3, cardW/20);

            //rotate(PI/ 15)
            //fill(58, 3, 104, 75);
            //rect(cardW*0.6, cardH*0.05, cardW/2.5, cardH/3, cardW/20);

            beginShape();
            vertex(cardW, cardH*0.8);
            quadraticVertex(cardW/5, cardW/100, cardW/2, cardH*2);
            bezierVertex(cardW/25, cardW*0.5, cardH*3, cardW/3, 100, 100);
            endShape(CLOSE)

            beginShape();
            vertex(cardW*1.1, cardH*0.8);
            quadraticVertex(cardW/5, cardW/100, cardW/2, cardH*2);
            bezierVertex(cardW/25, cardW*0.5, cardH*3, cardW/3, 100, 100);
            endShape(CLOSE)

            beginShape();
            vertex(cardW*1.2, cardH*0.8);
            quadraticVertex(cardW/5, cardW/100, cardW/2, cardH*2);
            bezierVertex(cardW/25, cardW*0.5, cardH*3, cardW/3, 100, 100);
            endShape(CLOSE)

            beginShape();
            vertex(cardW*1.3, cardH*0.8);
            quadraticVertex(cardW/5, cardW/100, cardW/2, cardH*2);
            bezierVertex(cardW/25, cardW*0.5, cardH*3, cardW/3, 100, 100);
            endShape(CLOSE)

            beginShape();
            vertex(cardW*0.9, cardH*0.8);
            quadraticVertex(cardW/5, cardW/100, cardW/2, cardH*2);
            bezierVertex(cardW/25, cardW*0.5, cardH*3, cardW/3, 100, 100);
            endShape(CLOSE)


            }

            function draw() {

            }