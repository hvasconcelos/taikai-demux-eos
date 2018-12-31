
const obj = {
    actionType: "taikai.poll::open",
    run: function(payload, blockInfo, context){
        console.info("State updated:\n", JSON.stringify(context.stateCopy, null, 2));
    },
}
module.exports = obj;