export function createConnection(roomId) {
  return {
    connect() {
      console.log(`[connect] room: ${roomId}`);
    },
    disconnect() {
      console.log(`[disconnect] room: ${roomId}`);
    },
  };
}