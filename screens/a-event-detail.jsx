/* eslint-disable */
// Variation A — Event Detail (5 tabs) + Share
const AD = {
  bg: '#F6EFE4', surface: '#FFFCF7', surfaceAlt: '#EFE5D4',
  ink: '#2A201A', ink2: '#6F5F52', ink3: '#A89A8B',
  line: '#E6DAC5', accent: '#B5572E', accentSoft: '#E9C7AE',
  ev: { wedding: '#B5485C', funeral: '#6E5380', celebration: '#C28534', other: '#7E8C7B' },
  success: '#5A8C5C', error: '#B33A2B',
  serif: '"Noto Serif JP", serif',
  sans:  '"Noto Sans JP", -apple-system, system-ui, sans-serif',
};

// Common event header (used on all 5 tabs)
function EventHeader({ tab }) {
  const tabs = [
    { k: 'overview', l: '概要' },
    { k: 'tasks',    l: 'タスク' },
    { k: 'guests',   l: 'ゲスト' },
    { k: 'money',    l: 'お金' },
    { k: 'notes',    l: 'メモ' },
  ];
  return (
    <>
      {/* Top nav */}
      <div style={{
        padding: '6px 8px 6px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: AD.surface,
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: 999,
          display: 'grid', placeItems: 'center', color: AD.ink2,
          fontFamily: AD.serif, fontSize: 20,
        }}>‹</div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[
            { i: '✎', c: AD.ink2 },
            { i: '↗', c: AD.accent },
            { i: '🗑', c: AD.error },
          ].map((b, i) => (
            <div key={i} style={{
              width: 32, height: 32, borderRadius: 8,
              display: 'grid', placeItems: 'center', color: b.c, fontSize: 14,
            }}>{b.i}</div>
          ))}
        </div>
      </div>

      {/* Title area */}
      <div style={{
        background: AD.surface, padding: '0 20px 14px',
        borderBottom: `1px solid ${AD.line}`, position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: AD.ev.celebration,
        }}/>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap', marginBottom: 4, marginTop: 14,
        }}>
          <div style={{
            fontFamily: AD.serif, fontSize: 22, fontWeight: 700, lineHeight: 1.2,
          }}>長男・蓮の七五三</div>
          <div style={{
            fontSize: 10, fontWeight: 700, color: AD.accent, letterSpacing: 1,
            padding: '2px 8px', background: `${AD.accent}18`, borderRadius: 999,
          }}>子供</div>
          <div style={{
            fontSize: 10, fontWeight: 700, color: AD.accent, letterSpacing: 1,
            padding: '2px 8px', background: `${AD.accent}18`, borderRadius: 999,
            display: 'flex', alignItems: 'center', gap: 4,
          }}>💬 家族4人と共有</div>
        </div>
        <div style={{ fontFamily: AD.serif, fontSize: 13, color: AD.ink2 }}>
          2026年3月15日（日）
        </div>
        <div style={{
          marginTop: 8, display: 'inline-flex', alignItems: 'baseline', gap: 4,
          background: `${AD.accent}18`, padding: '4px 10px', borderRadius: 999,
        }}>
          <div style={{ fontFamily: AD.serif, fontSize: 11, color: AD.ink2 }}>あと</div>
          <div style={{ fontFamily: AD.serif, fontSize: 16, color: AD.accent, fontWeight: 700 }}>47</div>
          <div style={{ fontFamily: AD.serif, fontSize: 11, color: AD.ink2 }}>日</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        background: AD.surface, borderBottom: `1px solid ${AD.line}`,
        display: 'flex', padding: '0 8px',
      }}>
        {tabs.map(t => {
          const on = t.k === tab;
          return (
            <div key={t.k} style={{
              flex: 1, textAlign: 'center', padding: '12px 4px',
              borderBottom: `2px solid ${on ? AD.accent : 'transparent'}`,
              fontSize: 13, fontWeight: 700,
              color: on ? AD.accent : AD.ink3,
              fontFamily: AD.sans,
            }}>{t.l}</div>
          );
        })}
      </div>
    </>
  );
}

// ── TAB 1: OVERVIEW ────────────────────────────────────────────────
function EventOverviewA() {
  return (
    <div style={{
      width: '100%', height: '100%', background: AD.bg, fontFamily: AD.sans,
      paddingTop: 56, overflow: 'hidden', color: AD.ink,
    }}>
      <EventHeader tab="overview" />
      <div style={{ padding: '14px 16px 0', overflow: 'hidden' }}>
        {/* Now-doing card */}
        <div style={{
          background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 16,
          padding: 14, marginBottom: 10,
          boxShadow: '0 1px 6px rgba(60,40,20,0.04)',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8,
          }}>
            <div style={{ fontFamily: AD.serif, fontSize: 15, fontWeight: 700 }}>今やること</div>
            <div style={{ fontSize: 11, color: AD.ink2, fontWeight: 600 }}>6 / 15 完了</div>
          </div>
          <div style={{ height: 5, background: AD.surfaceAlt, borderRadius: 5, marginBottom: 10, overflow: 'hidden' }}>
            <div style={{ width: '40%', height: '100%', background: AD.accent, borderRadius: 5 }}/>
          </div>
          {['写真館の予約', '着物・衣装の手配', '神社の参拝予約'].map((t, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0',
              borderTop: i > 0 ? `1px dashed ${AD.line}` : 'none',
            }}>
              <div style={{
                width: 16, height: 16, borderRadius: 4, border: `1.5px solid ${AD.line}`, flexShrink: 0,
              }}/>
              <div style={{ fontSize: 13, color: AD.ink, flex: 1 }}>{t}</div>
              <div style={{ fontSize: 11, color: AD.ink3 }}>›</div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{
          background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 16,
          padding: 14, marginBottom: 10,
        }}>
          <div style={{ fontFamily: AD.serif, fontSize: 14, fontWeight: 700, marginBottom: 10 }}>ゲスト状況</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { n: 24, l: '招待', c: AD.ink },
              { n: 18, l: '出席', c: AD.success },
              { n: 2,  l: '欠席', c: AD.error },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: AD.serif, fontSize: 26, fontWeight: 700, color: s.c, lineHeight: 1,
                }}>{s.n}</div>
                <div style={{ fontSize: 11, color: AD.ink2, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Money */}
        <div style={{
          background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 16, padding: 14, marginBottom: 10,
        }}>
          <div style={{ fontFamily: AD.serif, fontSize: 14, fontWeight: 700, marginBottom: 10 }}>収支状況</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
            {[
              { l: '収入', v: '¥45,000', c: AD.success },
              { l: '支出', v: '¥38,500', c: AD.error },
            ].map(m => (
              <div key={m.l} style={{
                flex: 1, background: AD.surfaceAlt, padding: '10px 12px', borderRadius: 10,
              }}>
                <div style={{ fontSize: 11, color: AD.ink3, fontWeight: 600 }}>{m.l}</div>
                <div style={{ fontFamily: AD.serif, fontSize: 17, fontWeight: 700, color: m.c, marginTop: 2 }}>{m.v}</div>
              </div>
            ))}
          </div>
          <div style={{
            background: AD.surfaceAlt, padding: '10px 14px', borderRadius: 10,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div style={{ fontSize: 13, fontWeight: 600 }}>収支</div>
            <div style={{ fontFamily: AD.serif, fontSize: 19, fontWeight: 700, color: AD.success }}>+¥6,500</div>
          </div>
        </div>

        {/* Share CTA */}
        <div style={{
          background: `${AD.accent}12`, border: `1px solid ${AD.accent}30`,
          padding: '14px 16px', borderRadius: 16,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 999, background: AD.accent,
            color: '#fff', display: 'grid', placeItems: 'center',
            fontFamily: AD.serif, fontSize: 17,
          }}>💬</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: AD.serif, fontSize: 14, fontWeight: 700 }}>家族・パートナーと共有</div>
            <div style={{ fontSize: 11, color: AD.ink2, marginTop: 2 }}>URLをLINEで共有できます</div>
          </div>
          <div style={{ color: AD.ink3, fontSize: 18 }}>›</div>
        </div>
      </div>
    </div>
  );
}

// ── TAB 2: TASKS ──────────────────────────────────────────────────
function EventTasksA() {
  const phases = [
    { name: '3ヶ月前', tasks: [
      { t: '神社の参拝予約', d: '2025/12/15', done: true,  assigned: '夫' },
      { t: '着物・衣装の手配', d: '2026/01/15', done: true,  assigned: '私' },
    ]},
    { name: '1ヶ月前', tasks: [
      { t: '写真館の予約',   d: '2026/02/15', done: false, assigned: '私' },
      { t: '美容院・着付け予約', d: '2026/02/20', done: false },
      { t: '会食会場の予約', d: '2026/02/25', done: false, urgent: true },
    ]},
    { name: '前日', tasks: [
      { t: '持ち物の最終確認', d: '2026/03/14', done: false },
    ]},
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: AD.bg, fontFamily: AD.sans,
      paddingTop: 56, overflow: 'hidden', color: AD.ink,
    }}>
      <EventHeader tab="tasks" />
      <div style={{ padding: '12px 16px 0' }}>
        {/* Add task button */}
        <div style={{
          background: AD.accent, color: '#fff', borderRadius: 12,
          padding: '10px 0', textAlign: 'center',
          fontSize: 14, fontWeight: 700, marginBottom: 10,
          boxShadow: '0 2px 8px rgba(181,87,46,0.18)',
        }}>＋ タスクを追加</div>

        {/* Contextual services */}
        <div style={{
          background: `${AD.accent}10`, border: `1px solid ${AD.accent}25`,
          padding: '10px 12px', borderRadius: 12, marginBottom: 12,
        }}>
          <div style={{
            fontSize: 10, color: AD.accent, fontWeight: 700, letterSpacing: 2, marginBottom: 6,
          }}>このイベントに役立つサービス</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['📷 写真館を探す', '👘 衣装を探す'].map(s => (
              <div key={s} style={{
                flex: 1, background: AD.surface, border: `1px solid ${AD.line}`,
                padding: '8px 10px', borderRadius: 10,
                fontSize: 11, fontWeight: 700, color: AD.accent, textAlign: 'center',
              }}>{s}</div>
            ))}
          </div>
        </div>

        {/* Phase groups */}
        {phases.map((p, pi) => (
          <div key={pi} style={{ marginBottom: 12 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6,
              padding: '0 4px',
            }}>
              <div style={{
                fontFamily: AD.serif, fontSize: 11, color: AD.accent, fontWeight: 700, letterSpacing: 2,
              }}>{p.name}</div>
              <div style={{ flex: 1, height: 1, background: AD.line }}/>
            </div>
            {p.tasks.map((t, ti) => (
              <div key={ti} style={{
                background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 10,
                padding: '10px 12px', marginBottom: 6,
                display: 'flex', alignItems: 'center', gap: 10,
                opacity: t.done ? 0.55 : 1,
              }}>
                <div style={{
                  width: 18, height: 18, borderRadius: 4,
                  border: `1.5px solid ${t.done ? AD.accent : AD.line}`,
                  background: t.done ? AD.accent : 'transparent',
                  color: '#fff', display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 800,
                  flexShrink: 0,
                }}>{t.done ? '✓' : ''}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: 13, fontWeight: 700,
                    textDecoration: t.done ? 'line-through' : 'none',
                  }}>{t.t}</div>
                  <div style={{
                    display: 'flex', gap: 8, marginTop: 2, fontSize: 10, color: AD.ink3,
                  }}>
                    <span>期限 {t.d}</span>
                    {t.assigned && (
                      <span style={{
                        background: AD.surfaceAlt, padding: '1px 6px', borderRadius: 999,
                        color: AD.ink2, fontWeight: 700,
                      }}>👤 {t.assigned}</span>
                    )}
                    {t.urgent && (
                      <span style={{
                        background: `${AD.error}20`, padding: '1px 6px', borderRadius: 999,
                        color: AD.error, fontWeight: 700,
                      }}>急ぎ</span>
                    )}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 4, color: AD.ink3 }}>
                  <span style={{ fontSize: 12 }}>✎</span>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div style={{
          margin: '12px 0',
          background: `${AD.accent}18`, border: `1px solid ${AD.accent}40`,
          padding: '12px 14px', borderRadius: 12,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{ fontFamily: AD.serif, fontSize: 17, color: AD.accent }}>✦</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: AD.accent }}>AIで本番日から逆算してタスクを提案</div>
            <div style={{ fontSize: 10, color: AD.ink3, marginTop: 1 }}>本日あと 5 回</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── TAB 3: GUESTS ─────────────────────────────────────────────────
function EventGuestsA() {
  const guests = [
    { name: '田中 健一', rel: '父方の祖父', status: 'attending', amount: 30000 },
    { name: '田中 美智子', rel: '父方の祖母', status: 'attending', amount: 30000 },
    { name: '佐藤 太郎', rel: '叔父', status: 'attending', amount: 10000 },
    { name: '佐藤 由美',  rel: '叔母',  status: 'pending', amount: 0 },
    { name: '山田 さくら', rel: '友人',  status: 'declined', amount: 0 },
  ];
  const statusStyle = (s) => {
    if (s === 'attending') return { l: '出席', c: AD.success, bg: `${AD.success}18` };
    if (s === 'declined')   return { l: '欠席', c: AD.error,   bg: `${AD.error}18` };
    return { l: '未回答', c: AD.ink3,   bg: AD.surfaceAlt };
  };
  return (
    <div style={{
      width: '100%', height: '100%', background: AD.bg, fontFamily: AD.sans,
      paddingTop: 56, overflow: 'hidden', color: AD.ink,
    }}>
      <EventHeader tab="guests" />
      <div style={{ padding: '14px 16px 0' }}>
        {/* Summary */}
        <div style={{
          background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 16,
          padding: '12px 14px', marginBottom: 10,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4,
        }}>
          {[
            { n: 24, l: '招待',   c: AD.ink },
            { n: 18, l: '出席',   c: AD.success },
            { n: 4,  l: '未回答', c: AD.ink2 },
            { n: 2,  l: '欠席',   c: AD.error },
          ].map(s => (
            <div key={s.l} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: AD.serif, fontSize: 22, fontWeight: 700, color: s.c, lineHeight: 1,
              }}>{s.n}</div>
              <div style={{ fontSize: 10, color: AD.ink3, marginTop: 3 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 10, overflow: 'hidden' }}>
          {[['すべて', true], ['出席'], ['未回答'], ['欠席'], ['父方'], ['母方']].map(([l, on], i) => (
            <div key={i} style={{
              padding: '5px 11px', borderRadius: 999,
              background: on ? AD.accent : AD.surface,
              color: on ? '#fff' : AD.ink2,
              border: `1px solid ${on ? AD.accent : AD.line}`,
              fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap',
            }}>{l}</div>
          ))}
        </div>

        {/* List */}
        {guests.map((g, i) => {
          const st = statusStyle(g.status);
          return (
            <div key={i} style={{
              background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 12,
              padding: '10px 12px', marginBottom: 6,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 999, background: AD.surfaceAlt,
                color: AD.accent, display: 'grid', placeItems: 'center',
                fontFamily: AD.serif, fontSize: 14, fontWeight: 700,
              }}>{g.name.charAt(0)}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{g.name}</div>
                <div style={{ fontSize: 10, color: AD.ink3, marginTop: 1 }}>{g.rel}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontSize: 10, fontWeight: 700, color: st.c, background: st.bg,
                  padding: '2px 8px', borderRadius: 999, letterSpacing: 1, display: 'inline-block',
                }}>{st.l}</div>
                {g.amount > 0 && (
                  <div style={{
                    fontFamily: AD.serif, fontSize: 11, color: AD.success, fontWeight: 700, marginTop: 3,
                  }}>¥{g.amount.toLocaleString()}</div>
                )}
              </div>
            </div>
          );
        })}

        <div style={{
          marginTop: 8,
          border: `1.5px dashed ${AD.accent}`, borderRadius: 12,
          padding: '10px 0', textAlign: 'center',
          color: AD.accent, fontSize: 13, fontWeight: 700,
        }}>＋ ゲストを追加</div>
      </div>
    </div>
  );
}

// ── TAB 4: MONEY ─────────────────────────────────────────────────
function EventMoneyA() {
  const items = [
    { t: '神社初穂料',      cat: '謝礼',   amount: -10000, date: '03/15' },
    { t: '着物レンタル',    cat: '衣装',   amount: -18000, date: '02/20' },
    { t: '写真撮影',        cat: '記念',   amount: -22000, date: '03/15' },
    { t: '会食代',          cat: '飲食',   amount: -28000, date: '03/15' },
    { t: '祖父母からのお祝い', cat: 'ご祝儀', amount: +30000, date: '03/14' },
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: AD.bg, fontFamily: AD.sans,
      paddingTop: 56, overflow: 'hidden', color: AD.ink,
    }}>
      <EventHeader tab="money" />
      <div style={{ padding: '14px 16px 0' }}>
        {/* Budget */}
        <div style={{
          background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 16,
          padding: '14px 16px', marginBottom: 10,
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6,
          }}>
            <div style={{ fontFamily: AD.serif, fontSize: 14, fontWeight: 700 }}>予算目標</div>
            <div style={{ fontFamily: AD.serif, fontSize: 14, fontWeight: 700 }}>¥120,000</div>
          </div>
          <div style={{
            height: 6, background: AD.surfaceAlt, borderRadius: 6, overflow: 'hidden', marginBottom: 6,
          }}>
            <div style={{ width: '65%', height: '100%', background: AD.accent }}/>
          </div>
          <div style={{ fontSize: 11, color: AD.accent, textAlign: 'right', fontWeight: 700 }}>
            ¥78,000 使用（65%）
          </div>

          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${AD.line}` }}>
            {[
              { l: '収入合計', v: '¥45,000', c: AD.success },
              { l: '支出合計', v: '¥78,000', c: AD.error },
            ].map(r => (
              <div key={r.l} style={{
                display: 'flex', justifyContent: 'space-between', padding: '4px 0',
              }}>
                <div style={{ fontSize: 13, color: AD.ink2 }}>{r.l}</div>
                <div style={{ fontFamily: AD.serif, fontSize: 13, fontWeight: 700, color: r.c }}>{r.v}</div>
              </div>
            ))}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '8px 0 2px', borderTop: `2px solid ${AD.line}`, marginTop: 4,
            }}>
              <div style={{ fontFamily: AD.serif, fontSize: 14, fontWeight: 700 }}>収支</div>
              <div style={{ fontFamily: AD.serif, fontSize: 19, fontWeight: 700, color: AD.error }}>-¥33,000</div>
            </div>
          </div>
        </div>

        {/* Records */}
        <div style={{ fontFamily: AD.serif, fontSize: 13, fontWeight: 700, marginBottom: 6, paddingLeft: 4 }}>
          記録
          <span style={{ fontSize: 11, color: AD.ink3, marginLeft: 6, fontWeight: 500 }}>{items.length}件</span>
        </div>
        {items.map((it, i) => (
          <div key={i} style={{
            background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 10,
            padding: '10px 12px', marginBottom: 4,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: AD.surfaceAlt, color: AD.ink2,
              display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 700,
            }}>{it.cat}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{it.t}</div>
              <div style={{ fontSize: 10, color: AD.ink3, marginTop: 1 }}>{it.date}</div>
            </div>
            <div style={{
              fontFamily: AD.serif, fontSize: 14, fontWeight: 700,
              color: it.amount > 0 ? AD.success : AD.ink,
            }}>{it.amount > 0 ? '+' : ''}¥{Math.abs(it.amount).toLocaleString()}</div>
          </div>
        ))}

        <div style={{
          marginTop: 10, marginBottom: 8,
          background: AD.accent, color: '#fff', borderRadius: 12,
          padding: '10px 0', textAlign: 'center',
          fontSize: 14, fontWeight: 700,
        }}>＋ 支出・収入を追加</div>
      </div>
    </div>
  );
}

// ── TAB 5: NOTES ──────────────────────────────────────────────────
function EventNotesA() {
  return (
    <div style={{
      width: '100%', height: '100%', background: AD.bg, fontFamily: AD.sans,
      paddingTop: 56, overflow: 'hidden', color: AD.ink,
    }}>
      <EventHeader tab="notes" />
      <div style={{ padding: '14px 16px 0' }}>
        <div style={{
          background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 16,
          padding: '16px 18px', marginBottom: 10,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', left: 0, top: 14, bottom: 14, width: 3, background: AD.accent,
          }}/>
          <div style={{ paddingLeft: 8 }}>
            <div style={{
              fontFamily: AD.serif, fontSize: 11, color: AD.ink3, letterSpacing: 2, marginBottom: 8,
            }}>MEMO</div>
            <div style={{
              fontFamily: AD.serif, fontSize: 14, color: AD.ink, lineHeight: 1.8,
            }}>
              神社は川越氷川神社、10時の参拝予定。会食は<br/>
              祖父母と叔父叔母含む8名で予約済み。<br/><br/>
              当日の役割分担：<br/>
              ・夫＝ビデオ撮影<br/>
              ・私＝着付け補助<br/>
              ・祖母＝千歳飴の手配済み<br/><br/>
              当日の天気が心配なので、雨天時は神社内の待合室を確保することを忘れずに。
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{
            flex: 1, background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 12,
            padding: '10px 0', textAlign: 'center', fontSize: 12, fontWeight: 700, color: AD.ink2,
          }}>✎ 編集</div>
          <div style={{
            flex: 1, background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 12,
            padding: '10px 0', textAlign: 'center', fontSize: 12, fontWeight: 700, color: AD.ink2,
          }}>📎 ファイル添付</div>
        </div>

        {/* Attached files (placeholder) */}
        <div style={{ marginTop: 14 }}>
          <div style={{ fontFamily: AD.serif, fontSize: 12, color: AD.ink2, letterSpacing: 2, marginBottom: 6, paddingLeft: 4 }}>
            添付 ・ 3件
          </div>
          {[
            { ico: '🖼', t: '写真館候補3社の比較.png',  s: '1.2MB' },
            { ico: '📄', t: '神社からの案内.pdf',       s: '380KB' },
            { ico: '🔗', t: '川越氷川神社の予約ページ', s: 'URL'   },
          ].map((f, i) => (
            <div key={i} style={{
              background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 10,
              padding: '10px 12px', marginBottom: 4,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ fontSize: 18 }}>{f.ico}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{f.t}</div>
                <div style={{ fontSize: 10, color: AD.ink3, marginTop: 1 }}>{f.s}</div>
              </div>
              <div style={{ color: AD.ink3 }}>›</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── SHARE SCREEN ──────────────────────────────────────────────────
function ShareA() {
  return (
    <div style={{
      width: '100%', height: '100%', background: AD.bg, fontFamily: AD.sans,
      paddingTop: 56, overflow: 'hidden', color: AD.ink,
    }}>
      <div style={{
        padding: '8px 16px 12px', display: 'flex', alignItems: 'center', gap: 10,
        background: AD.surface, borderBottom: `1px solid ${AD.line}`,
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: 999,
          display: 'grid', placeItems: 'center', color: AD.ink2,
          fontFamily: AD.serif, fontSize: 20,
        }}>‹</div>
        <div style={{ flex: 1, fontFamily: AD.serif, fontSize: 17, fontWeight: 700 }}>家族と共有</div>
      </div>

      <div style={{ padding: '20px 20px 0' }}>
        {/* Hero illustration */}
        <div style={{
          background: `linear-gradient(135deg, ${AD.accent}28, ${AD.accentSoft}90)`,
          height: 120, borderRadius: 18, position: 'relative', overflow: 'hidden',
          marginBottom: 18,
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 14px)',
          }}/>
          <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
            <div style={{
              fontFamily: AD.serif, fontSize: 38, color: AD.accent, fontWeight: 700,
            }}>👨‍👩‍👧‍👦</div>
          </div>
        </div>

        <div style={{ fontFamily: AD.serif, fontSize: 19, fontWeight: 700, lineHeight: 1.3 }}>
          家族・パートナーと<br/>準備を一緒に進めよう
        </div>
        <div style={{ fontSize: 12, color: AD.ink2, marginTop: 6, lineHeight: 1.6 }}>
          リンクを送るだけで、家族はアプリのインストール不要でタスクや日程を確認できます。
        </div>

        {/* Invite link */}
        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: AD.ink2, marginBottom: 6, letterSpacing: 1 }}>
            招待リンク
          </div>
          <div style={{
            background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 12,
            padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{
              flex: 1, fontFamily: 'ui-monospace, monospace', fontSize: 11,
              color: AD.ink2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>lifepath.app/invite/k7Q9-2xH</div>
            <div style={{
              padding: '4px 10px', background: AD.accent, color: '#fff', borderRadius: 8,
              fontSize: 11, fontWeight: 700,
            }}>コピー</div>
          </div>
        </div>

        {/* Share actions */}
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          {[
            { ico: '💬', l: 'LINE',  c: '#06C755' },
            { ico: '✉',  l: 'メール', c: AD.accent },
            { ico: '↗',  l: 'その他', c: AD.ink2 },
          ].map(b => (
            <div key={b.l} style={{
              flex: 1, background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 12,
              padding: '12px 0', textAlign: 'center',
            }}>
              <div style={{ fontSize: 20, color: b.c }}>{b.ico}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: AD.ink2, marginTop: 2 }}>{b.l}</div>
            </div>
          ))}
        </div>

        {/* Current members */}
        <div style={{ marginTop: 20 }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: 8,
          }}>
            <div style={{ fontFamily: AD.serif, fontSize: 13, fontWeight: 700 }}>
              現在のメンバー
              <span style={{ fontSize: 11, color: AD.ink3, marginLeft: 6, fontWeight: 500 }}>4人</span>
            </div>
            <div style={{ fontSize: 11, color: AD.accent, fontWeight: 700 }}>権限を管理</div>
          </div>
          <div style={{
            background: AD.surface, border: `1px solid ${AD.line}`, borderRadius: 12, overflow: 'hidden',
          }}>
            {[
              { n: '佐藤 美咲', r: 'オーナー（あなた）', c: AD.accent, role: 'owner' },
              { n: '佐藤 健太', r: '夫',                 c: AD.ev.other, role: 'editor' },
              { n: '佐藤 蓮',   r: '子供',               c: AD.ev.celebration, role: 'viewer' },
              { n: '田中 美智子', r: '父方の祖母',       c: AD.ev.wedding, role: 'editor' },
            ].map((m, i, arr) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                borderBottom: i < arr.length - 1 ? `1px solid ${AD.line}` : 'none',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 999, background: m.c,
                  color: '#fff', display: 'grid', placeItems: 'center',
                  fontFamily: AD.serif, fontSize: 14, fontWeight: 700,
                }}>{m.n.charAt(0)}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{m.n}</div>
                  <div style={{ fontSize: 10, color: AD.ink3, marginTop: 1 }}>{m.r}</div>
                </div>
                <div style={{
                  fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 999,
                  background: m.role === 'owner' ? AD.accent : AD.surfaceAlt,
                  color: m.role === 'owner' ? '#fff' : AD.ink2,
                  letterSpacing: 1,
                }}>{m.role === 'owner' ? 'OWNER' : m.role === 'editor' ? '編集可' : '閲覧のみ'}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { EventOverviewA, EventTasksA, EventGuestsA, EventMoneyA, EventNotesA, ShareA });
