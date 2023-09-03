function MarsRover(x, y, direction, command) {
  this.x = x;
  this.y = y;
  this.direction = direction;
  this.command = command;
  this.moveForward = () => {
    switch (this.direction) {
      case "NORTH":
        this.y++;
        break;
      case "SOUTH":
        this.y--;
        break;
      case "EAST":
        this.x++;
        break;
      case "WEST":
        this.x--;
        break;
    }
  };

  this.moveBackward = () => {
    switch (this.direction) {
      case "NORTH":
        this.y--;
        break;
      case "SOUTH":
        this.y++;
        break;
      case "EAST":
        this.x--;
        break;
      case "WEST":
        this.x++;
        break;
    }
  };

  this.moveRight = () => {
    switch (this.direction) {
      case "NORTH":
        this.direction = "EAST";
        break;
      case "SOUTH":
        this.direction = "WEST";
        break;
      case "EAST":
        this.direction = "SOUTH";
        break;
      case "WEST":
        this.direction = "NORTH";
        break;
    }
  };

  this.moveLeft = () => {
    switch (this.direction) {
      case "NORTH":
        this.direction = "WEST";
        break;
      case "SOUTH":
        this.direction = "EAST";
        break;
      case "EAST":
        this.direction = "NORTH";
        break;
      case "WEST":
        this.direction = "SOUTH";
        break;
    }
  };

  this.applyCommand = () => {
    for (let i = 0; i < this.command.length; i++) {
      switch (this.command[i]) {
        case "F":
          this.moveForward();
          break;
        case "B":
          this.moveBackward();
          break;
        case "L":
          this.moveLeft();
          break;
        case "R":
          this.moveRight();
          break;
        default:
          document.write(`Invalid command: ${this.command}`);
      }
    }
    document.write(
      `Current direction is (${this.x} , ${this.y}) ${this.direction}`
    );
  };
}

const marsRover = new MarsRover(4, 2, "EAST", "FLFFFRFLB");
marsRover.applyCommand();
