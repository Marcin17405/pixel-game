class Map {
    constructor(tileSize, mapData, tilesetImgSrc) {
        this.tileSize = tileSize;
        this.mapData = mapData;
        this.tileset = new Image();
        this.tileset.src = tilesetImgSrc;
      }
    
      draw(ctx) {
        for (let row = 0; row < this.mapData.length; row++) {
          for (let col = 0; col < this.mapData[row].length; col++) {
            const tile = this.mapData[row][col];
            const tileX = col * this.tileSize;
            const tileY = row * this.tileSize;
            ctx.drawImage(this.tileset, tile * this.tileSize, 0, this.tileSize, this.tileSize, tileX, tileY, this.tileSize, this.tileSize);
          }
        }
    }
}
export {Map};