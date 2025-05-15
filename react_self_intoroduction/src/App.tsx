import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
        <header>
            <h1>自己紹介</h1>
        </header>
        <main>
            <article>
                <Info/>
                <Local/>
                <Vita/>
                <Question/>                
            </article>
        </main>
    </>
  )
}

// 自己紹介コンポーネント

const Info = () => {
    return(
        <>
            <h2>基本情報</h2>
            <table>
            <tbody>
                <tr><td>名前</td><td>金子健人</td></tr>
                <tr><td>所属</td><td>公立諏訪東京理科大学</td></tr>
                <tr><td>学籍番号</td><td>T223035</td></tr>
                <tr><td>出身地</td><td>長野県諏訪市</td></tr>
            </tbody>
            </table>
        </>
    )
}

const Local = () => {
    return(
        <>
            <h2>地域連携課題演習で取り組んだ内容</h2>
            <p>デジタルホワイトボードを活用した非共有ノウハウの活用</p>
            <details>
                <summary>詳細を表示</summary>
                <p>電子ホワイトボードにアイディアを書き込んだ時，過去のアイディアを表示するサービスの開発をおこなった．</p>
                <ul>
                    <li><strong>FPLの課題</strong>：ヒューマンエラーによって不良が生じていた．</li>
                    <li><strong>ヒューマンエラーについて</strong>：個人的要因，環境的要因など原因が多岐にわたる．</li>
                    <li><strong>現状の対策</strong>：ホワイトボードを用いてブレインストーミングをしながら，それぞれの解決方法を検討していた．</li>
                    <li><strong>見出した問題点</strong>：検討内容がアナログで保存されており参照しずらく，類似議題について検討する際も一から検討する必要があった．</li>
                    <li><strong>提案した改善案</strong>：電子ホワイトボードに議題等を書き込んだ時，過去のアイディアを表示することで議論の効率化をはかった．</li>
                </ul>
            </details>
        </>
    )
}

const Vita = () => {
    return(
        <>
            <h2>VitaLinkで目指すこと</h2>
                <p>バックエンド・フロントエンドの技術力向上，また課題発見・解決能力向上</p>
        </>
    )
}

// ボタンを押すとフォーム入力内容をコンソールに出力する
const Question = () => {
    const [question, setQuestion] = useState('')

    const handleClick = (e: React.FormEvent) =>{
    e.preventDefault();
    console.log("入力された質問：", question)
  }

    return(
        <>
            <h2>質問フォーム</h2>
            <form>
                <textarea
                    rows={4}
                    cols={40}
                    placeholder="ここに質問を入力してください"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <button
                    type="submit"
                    onClick={handleClick}>
                        送信
                </button>
            </form>
        </>
    )
}

export default App
