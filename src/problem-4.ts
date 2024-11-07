{

    type Circle = {
        shape: 'circle';
        radius: number;
    };

    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number;
    };

    type AreaType = Circle | Rectangle;

    const calculateShapeArea = (params: AreaType): number | void => {
        if (params.shape == 'circle') {
            return Math.PI * params.radius * params.radius;
        } else if (params.shape == 'rectangle') {
            return params.width * params.height;
        } else {
            console.log('problem');
        }
    };


    const circleArea = calculateShapeArea({ shape: 'circle', radius: 30 });
    const rectangleArea = calculateShapeArea({ shape: 'rectangle', height: 30, width: 30 });

    console.log(circleArea)
    console.log(rectangleArea)


}











