
const obj = {
    actionType: "taikai.poll::open",
    apply: function(state, payload, blockInfo, context){
        console.info("Received a Voting Open");
    },
}
module.exports = obj;