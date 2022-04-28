class Link {

    constructor(bodya, bodyb) {
        var lastlink = bodya.body.bodies.length - 2

        this.link = Constraint.create({
            bodya: bodya.body.bodies[lastlink],

            pointA: { x: 0, y: 0 },
            bodyb: bodyb,
            pointB: { x: 0, y: 0 },
            length: 0,
            stiffness: 0.01,



        })

        World.add(engine.world, this.link);
        

    }
}