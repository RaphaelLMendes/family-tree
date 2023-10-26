import { Component } from '@angular/core';

import {
  FamItemConfig,
  GroupByType,
  PageFitMode,
  Enabled,
} from 'projects/ngx-basic-primitives/src/public-api';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
    </div>
    <div class="sample">
      <fam-diagram
        [items]="items"
        [pageFitMode]="PageFitMode.AutoSize"
        [cursorItem]="2"
        [linesWidth]="1"
        [arrowsDirection]="GroupByType.Parents"
        [showExtraArrows]="false"
        [linesColor]="'black'"
        [normalLevelShift]="20"
        [dotLevelShift]="20"
        [lineLevelShift]="20"
        [normalItemsInterval]="10"
        [dotItemsInterval]="30"
        [lineItemsInterval]="30"
        [hasSelectorCheckbox]="Enabled.False"
        [centerOnCursor]="true"
      >
      </fam-diagram>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'First Family Chart';

  PageFitMode = PageFitMode;
  Enabled = Enabled;
  GroupByType = GroupByType;

  photos = {
    a:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARn' +
      'QU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGnSURBVGhD7dnBbQJBDAVQk1o2QjlQwKYGzpSwKQfq4IxIC' +
      'RTB9jLZHCJFwWv7/7EiDt6zmX2yPYMHNq01eb7n5flI36JiIXWpbFW2kAwgsdVblS0kA0hs9db/ZWs+vW/Wno9PxPE3dh' +
      'ls6Od+HI1XT1d64Sb8R5utEulwdbA8VY+LZ/kqkfF456pBHxDz5Xxze/p2vsxukBbAshTVOE0PO4B2cUlWKrgUTKsrV0e' +
      'ut3RVU/cm5aKKqPXVbjuIDPtDUh2JImq1+jmjkupIFNFStXadHncWXkecpb3393me4oJZnionXyjLV6W4QFZEleHCWNG+' +
      '0eKggQJiRVV6vhAXwoqrul0AC1H1uuIsTLUyukYH1jBL7WJ8lgq6oqwkVXSQDrLSVEFXjJWoirlCrFRVyBVhJasirgCr6' +
      '5tEv7a5A5jL0tcN7vNl9OVcHqtXRbocVr+Kc9k3H/3qPL69Ise7dh0SsS+2JmtFddgvdy/gGbY7Jdp2GRcyrlu1BfUjxt' +
      'iPRm/lqVbGHOMHnU39zQm0I/UbBLA+GVosJHGVrcoWkgEktnoLydYXkF/LiXG21MwAAAAASUVORK5CYII=',
  };

  items = [
    new FamItemConfig({
      id: 3,
      title: 'Sonia Moura',
      label: 'Sonia Moura',
      description: 'test',
      image: this.photos.a,
    }),
    new FamItemConfig({
      id: 2,
      title: 'Luiz Costa',
      label: 'Luiz da Costa',
      description: 'Luiz Vo',
      image: this.photos.a,
    }),
    new FamItemConfig({
      id: 1,
      title: 'José Moura',
      label: 'José Moura',
      description: '2nd Husband',
      image: this.photos.a,
    }),
    new FamItemConfig({
      id: 4,
      parents: [2, 3, 1],
      title: 'Simone Mendes',
      label: 'Simone Mendes',
      description: '1st son',
      image: this.photos.a,
    }),
    new FamItemConfig({
      id: 5,
      title: 'Cesar Mendes',
      label: 'Cesar Mendes',
      description: 'Pai',
      image: this.photos.a,
    }),
    new FamItemConfig({
      id: 6,
      parents: [4, 5],
      title: 'Thais Mendes',
      label: 'Thais Mendes',
      description: 'Thais Mendes',
      image: this.photos.a,
    }),
    new FamItemConfig({
      id: 7,
      parents: [4, 5],
      title: 'Raphael Mendes',
      label: 'Raphael Mendes',
      description: 'Raphael Mendes',
      image: this.photos.a,
    }),
  ];
}
