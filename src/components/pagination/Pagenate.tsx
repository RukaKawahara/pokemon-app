import "./paginate.css";
import ReactPaginate from 'react-paginate';

const Pagenate = (props:any) => {
  const {count, loadNewPage} = props;

  const pageChange = async(event:any) => {
    let pageNumber = event['selected']; //選択されたページ番号
    await loadNewPage(`https://pokeapi.co/api/v2/pokemon/?offset=${pageNumber * 20}&limit=20`);
  }

  return (
    <div>
      <ReactPaginate
        pageCount={Math.ceil(count / 20)} //総ページ数。今回は一覧表示したいデータ数 / 1ページあたりの表示数としてます。
        marginPagesDisplayed={1} //先頭と末尾に表示するページの数。
        pageRangeDisplayed={2} //上記の「今いるページの前後」の番号をいくつ表示させるかを決めます。
        onPageChange={pageChange} //ページネーションのリンクをクリックしたときのイベント
        containerClassName='pagination' //ページネーションリンクの親要素のクラス名
        pageClassName='page-item' //各子要素(li要素)のクラス名
        pageLinkClassName='page-link' //ページネーションのリンクのクラス名
        activeClassName='is-active' //今いるページ番号のクラス名。今いるページの番号だけ太字にしたりできます
        previousLabel='<' //前のページ番号に戻すリンクのテキスト
        nextLabel='>' //次のページに進むボタンのテキスト
        previousClassName='page-item' // '<'の親要素(li)のクラス名
        nextClassName='page-item' //'>'の親要素(li)のクラス名
        previousLinkClassName='page-link'  //'<'のリンクのクラス名
        nextLinkClassName='page-link'//'>'のリンクのクラス名
        disabledClassName='disabled' //先頭 or 末尾に行ったときにそれ以上戻れ(進め)なくするためのクラス
        breakLabel='...' // ページがたくさんあるときに表示しない番号に当たる部分をどう表示するか
        breakClassName='page-item' // 上記の「…」のクラス名
        breakLinkClassName='page-link' // 「…」の中のリンクにつけるクラス
      />
    </div>
  )
}

export default Pagenate