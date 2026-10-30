import { getTips,pickTip } from '@/lib/tips'

export const metadata = {
  title: 'TODOのコツ | TODOアプリ',
}

export default async function TipsPage() {
  const tips = await getTips()
  return (
    <main className="container">
      <h1>TODOのコツ</h1>
      <h2>今日のおすすめ</h2>

    <p>{pickTip(tips, new Date().getDay()).text}</p>

      <ol>
        {tips.map((tip) => (
          <li key={tip.id}>{tip.text}</li>
        ))}
      </ol>
    </main>
  )
}
