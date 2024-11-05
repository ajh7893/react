document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('mouse click occurs: event.', isTrusted, target, bubbles)
})
document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('mouse click also occurs: event.', isTrusted, target, bubbles)
})
export default function EventListener() {
  return <div>EventListener</div>
}
