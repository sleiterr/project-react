let connections = 0;

export function createConnection(serverUrl, roomId) {
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
      connections++;
      console.log("Active connection: " + connections);
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
      connections--;
      console.log("Active connections: " + connections);
    },
  };
}
