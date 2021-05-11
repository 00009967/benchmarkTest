import jm from 'js-meter';
const isPrint = true;
const isKb = true; // or Mb
// const isMs = true;
const m = new jm({ isPrint, isKb });
for (var i = 0; i < 10000; i++) {
    Math.random();
}
const meter = m.stop();
