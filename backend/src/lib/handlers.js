export default function(client, clientManager, gameManager){

    function handleSignIn(user){
        clientManager.clientSignIn(client, user);
    }

    function handleDisconnect(){
        clientManager.removeClient(client);
        console.log(clientManager.getClients());
    }

    return {
        handleSignIn,
        handleDisconnect
      }
}