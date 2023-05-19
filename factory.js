export default function createTodo (name, details, dateDue, priority) {
  return { name, details, dateDue, priority}
}

export function createProject (name) {
  return { name }
}
