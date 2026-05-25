/* eslint-disable */
// Variation A: 温かいクリーム — Cream Warm, Family Album feel
// Palette: cream background, deep warm text, terracotta accent, muted event colors
// Typography: Noto Serif JP (display), Noto Sans JP (body)

const A = {
  bg: '#F6EFE4',
  surface: '#FFFCF7',
  surfaceAlt: '#EFE5D4',
  ink: '#2A201A',
  ink2: '#6F5F52',
  ink3: '#A89A8B',
  line: '#E6DAC5',
  accent: '#B5572E',       // terracotta
  accentSoft: '#E9C7AE',
  // muted event tones
  ev: {
    wedding: '#B5485C',
    funeral: '#6E5380',
    celebration: '#C28534',
    other: '#7E8C7B',
  },
  serif: '"Noto Serif JP", "Shippori Mincho", serif',
  sans:  '"Noto Sans JP", -apple-system, system-ui, sans-serif',
};

// ── helpers ─────────────────────────────────────────────────────────────
const dot = (c, s = 8) => ({
  width: s, height: s, borderRadius: s, background: c, display: 'inline-block',
});

function Chip({ children, active, color = A.accent }) {
  return (
    <div style={{
      padding: '6px 12px', borderRadius: 999,
      background: active ? color : 'transparent',
      color: active ? '#fff' : A.ink2,
      border: `1px solid ${active ? color : A.line}`,
      fontFamily: A.sans, fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap',
    }}>{children}</div>
  );
}

function TabBar({ active }) {
  const items = [
    { k: 'home', label: 'ホーム', icon: '◇' },
    { k: 'cal',  label: 'カレンダー', icon: '▤' },
    { k: 'time', label: '年表', icon: '⌖' },
    { k: 'set',  label: '設定', icon: '⚙' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      padding: '8px 12px 28px', background: A.surface,
      borderTop: `1px solid ${A.line}`,
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4,
      fontFamily: A.sans,
    }}>
      {items.map(it => {
        const on = it.k === active;
        return (
          <div key={it.k} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            padding: '6px 0', color: on ? A.accent : A.ink3,
          }}>
            <div style={{ fontSize: 20, lineHeight: 1 }}>{it.icon}</div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 0.5 }}>{it.label}</div>
          </div>
        );
      })}
    </div>
  );
}

// ── HOME ────────────────────────────────────────────────────────────────
// Big event card for carousel
function BigEventCardA({ ev, width = 320 }) {
  return (
    <div style={{
      width, flexShrink: 0,
      background: A.surface, borderRadius: 20, overflow: 'hidden',
      boxShadow: '0 2px 16px rgba(60,40,20,0.07)',
      border: `1px solid ${A.line}`,
    }}>
      <div style={{
        height: 96,
        background: `linear-gradient(135deg, ${ev.c}30, ${A.accentSoft}80)`,
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 14px)',
        }} />
        <div style={{
          position: 'absolute', left: 16, bottom: 12,
          fontFamily: A.serif, fontSize: 10, color: A.ink, opacity: 0.6, letterSpacing: 3,
        }}>NEXT EVENT</div>
        <div style={{
          position: 'absolute', right: 16, top: 12, fontFamily: A.serif,
          fontSize: 12, color: A.ink2, fontWeight: 600,
        }}>あと <span style={{ fontSize: 26, color: A.accent, fontWeight: 700 }}>{ev.days}</span> 日</div>
      </div>
      <div style={{ padding: '12px 16px 14px' }}>
        <div style={{ fontSize: 10, color: ev.c, fontWeight: 700, letterSpacing: 2 }}>{ev.tag}</div>
        <div style={{ fontFamily: A.serif, fontSize: 18, fontWeight: 700, marginTop: 2 }}>{ev.name}</div>
        <div style={{ fontSize: 11, color: A.ink2, marginTop: 4 }}>{ev.date} ・ {ev.loc}</div>
        <div style={{
          marginTop: 10, display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <div style={{ flex: 1, height: 3, background: A.surfaceAlt, borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ width: ev.pct + '%', height: '100%', background: ev.c }}/>
          </div>
          <div style={{ fontFamily: A.serif, fontSize: 11, fontWeight: 600, color: A.ink2 }}>{ev.prog}</div>
        </div>
      </div>
    </div>
  );
}

function HomeA() {
  const events = [
    { c: A.ev.celebration, tag: 'お祝い',  name: '長男・蓮の七五三', date: '3月15日',  loc: '川越氷川神社', days: 47, prog: '6/15', pct: 40 },
    { c: A.ev.wedding,     tag: '結婚式', name: '妹・美咲の結婚式', date: '4月20日', loc: '帝国ホテル',   days: 83, prog: '3/22', pct: 14 },
    { c: A.ev.funeral,     tag: '法要',    name: '祖父・一周忌',     date: '4月1日',  loc: '川崎・廣徳寺', days: 64, prog: '2/8',  pct: 25 },
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: A.bg, fontFamily: A.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: A.ink,
      position: 'relative',
    }}>
      {/* Header */}
      <div style={{ padding: '6px 24px 12px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: A.serif, fontSize: 12, color: A.ink2, letterSpacing: 4 }}>
            2026 ・ 春
          </div>
          <div style={{ fontFamily: A.serif, fontSize: 24, fontWeight: 600, marginTop: 3, letterSpacing: 1 }}>
            おかえりなさい、佐藤さん。
          </div>
        </div>
        <div style={{
          width: 40, height: 40, borderRadius: 999,
          background: `linear-gradient(135deg, ${A.accent}, ${A.ev.celebration})`,
          color: '#fff', display: 'grid', placeItems: 'center',
          fontFamily: A.serif, fontSize: 16, fontWeight: 700,
        }}>佐</div>
      </div>

      {/* Carousel */}
      <div style={{
        display: 'flex', gap: 12, paddingLeft: 20, paddingRight: 20,
        overflow: 'hidden',
      }}>
        {events.map((ev, i) => <BigEventCardA key={i} ev={ev} width={i === 0 ? 320 : 280} />)}
      </div>
      {/* Pagination dots */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: 6, marginTop: 14,
      }}>
        {events.map((_, i) => (
          <div key={i} style={{
            width: i === 0 ? 22 : 6, height: 6, borderRadius: 6,
            background: i === 0 ? A.accent : A.line,
            transition: 'width .2s',
          }}/>
        ))}
      </div>

      {/* Tasks for current event */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ fontFamily: A.serif, fontSize: 16, fontWeight: 700 }}>
            このイベントのタスク
            <span style={{ fontSize: 11, color: A.ink3, marginLeft: 8, fontWeight: 500 }}>9件</span>
          </div>
          <div style={{ fontSize: 11, color: A.accent, fontWeight: 700 }}>すべて ›</div>
        </div>

        {[
          { c: A.ev.celebration, t: '写真館の予約',     d: '3月15日', n: 12 },
          { c: A.ev.celebration, t: '着物・衣装の予約', d: '3月1日',  n: -2, urgent: true },
        ].map((t, i) => (
          <div key={i} style={{
            background: A.surface, borderRadius: 14, padding: '12px 14px',
            display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8,
            border: `1px solid ${A.line}`,
          }}>
            <div style={{ width: 3, alignSelf: 'stretch', borderRadius: 3, background: t.c, minHeight: 36 }}/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{t.t}</div>
                {t.urgent && <div style={{
                  fontSize: 9, fontWeight: 700, color: '#fff', background: '#B33A2B',
                  padding: '2px 7px', borderRadius: 999, letterSpacing: 1,
                }}>期限超過</div>}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, fontSize: 11 }}>
                <div style={{ color: A.ink3 }}>期限 {t.d}</div>
                <div style={{ color: t.urgent ? '#B33A2B' : A.ink2, fontWeight: 600 }}>
                  {t.urgent ? `${Math.abs(t.n)}日遅れ` : `あと${t.n}日`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAB: AI 相談 */}
      <div style={{
        position: 'absolute', right: 20, bottom: 110,
        background: A.accent, color: '#fff',
        padding: '10px 16px', borderRadius: 999,
        display: 'flex', alignItems: 'center', gap: 6,
        boxShadow: '0 6px 20px rgba(181,87,46,0.35)',
        fontFamily: A.sans, fontSize: 13, fontWeight: 700,
      }}>
        <span style={{ fontFamily: A.serif, fontSize: 16 }}>✦</span> AIで作成
      </div>

      <TabBar active="home" />
    </div>
  );
}

// ── CALENDAR ─────────────────────────────────────────────────────────────
function CalendarA() {
  const days = Array.from({length: 35}, (_,i) => i - 5); // 1..28-ish positions
  const eventsOnDay = {
    3: A.ev.wedding, 8: A.ev.celebration, 15: A.ev.celebration,
    21: A.ev.funeral, 23: A.ev.other,
  };
  return (
    <div style={{
      width: '100%', height: '100%', background: A.bg, fontFamily: A.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: A.ink,
    }}>
      <div style={{ padding: '8px 24px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontFamily: A.serif, fontSize: 11, color: A.ink2, letterSpacing: 4 }}>2026</div>
          <div style={{ fontFamily: A.serif, fontSize: 30, fontWeight: 700 }}>三月</div>
        </div>
        <div style={{ display: 'flex', gap: 8, fontFamily: A.serif }}>
          <div style={{ width: 32, height: 32, borderRadius: 16, border: `1px solid ${A.line}`,
            display: 'grid', placeItems: 'center', color: A.ink2 }}>‹</div>
          <div style={{ width: 32, height: 32, borderRadius: 16, background: A.accent,
            display: 'grid', placeItems: 'center', color: '#fff' }}>›</div>
        </div>
      </div>

      {/* Day grid */}
      <div style={{ background: A.surface, margin: '0 16px', borderRadius: 20,
        padding: 14, border: `1px solid ${A.line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: 6 }}>
          {['日','月','火','水','木','金','土'].map((d,i)=>(
            <div key={d} style={{
              textAlign: 'center', fontSize: 10, fontWeight: 600,
              color: i===0 ? A.ev.wedding : (i===6 ? '#4B6FA0' : A.ink2),
              fontFamily: A.serif, letterSpacing: 2,
            }}>{d}</div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
          {days.map((d, i) => {
            const real = d > 0 && d <= 31;
            const isToday = d === 12;
            const ev = eventsOnDay[d];
            return (
              <div key={i} style={{
                aspectRatio: '1', borderRadius: 10,
                background: isToday ? A.accent : 'transparent',
                color: !real ? A.ink3 : (isToday ? '#fff' : (i%7===0 ? A.ev.wedding : A.ink)),
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontFamily: A.serif, fontWeight: isToday ? 700 : 500,
                position: 'relative',
              }}>
                <div>{real ? d : (d <= 0 ? 28+d : d-31)}</div>
                {ev && real && !isToday && <div style={{
                  width: 5, height: 5, borderRadius: 5, background: ev, marginTop: 2,
                }} />}
                {isToday && ev && <div style={{ width: 5, height: 5, borderRadius: 5, background: '#fff', marginTop: 2 }} />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Today list */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ fontFamily: A.serif, fontSize: 13, color: A.ink2, letterSpacing: 3 }}>
          3月15日（日）
        </div>
        <div style={{ fontFamily: A.serif, fontSize: 19, fontWeight: 700, marginTop: 2, marginBottom: 12 }}>
          この日の予定
        </div>
        {[
          { c: A.ev.celebration, name: '長男・蓮の七五三', time: '10:00 - 14:00', loc: '川越氷川神社' },
          { c: A.ev.other, name: '家族写真撮影', time: '15:00 - 16:30', loc: '写真館スタジオAOI' },
        ].map((e,i) => (
          <div key={i} style={{
            display: 'flex', gap: 12, padding: '10px 0',
            borderBottom: i === 0 ? `1px dashed ${A.line}` : 'none',
          }}>
            <div style={{
              width: 4, alignSelf: 'stretch', borderRadius: 4, background: e.c,
            }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{e.name}</div>
              <div style={{ fontSize: 11, color: A.ink2, marginTop: 3, display: 'flex', gap: 12 }}>
                <span>◷ {e.time}</span>
                <span>◎ {e.loc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <TabBar active="cal" />
    </div>
  );
}

// ── TIMELINE 年表 ─────────────────────────────────────────────────────────
function TimelineA() {
  const rows = [
    { year: '2027', age: '36', items: [
      { c: A.ev.celebration, name: '長女・葵の七五三', date: '11月', sub: '3歳・お祝い' },
    ]},
    { year: '2026', age: '35', current: true, items: [
      { c: A.ev.celebration, name: '長男・蓮の七五三', date: '3月15日', sub: '5歳・お祝い' },
      { c: A.ev.wedding,     name: '妹・美咲の結婚式', date: '4月20日', sub: '家族として参列' },
      { c: A.ev.funeral,     name: '祖父・一周忌', date: '4月1日', sub: '法要' },
    ]},
    { year: '2025', age: '34', items: [
      { c: A.ev.other,      name: '次男・誕生', date: '7月3日', sub: '家族の記録' },
    ]},
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: A.bg, fontFamily: A.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: A.ink,
    }}>
      <div style={{ padding: '8px 24px 8px' }}>
        <div style={{ fontFamily: A.serif, fontSize: 11, color: A.ink2, letterSpacing: 4 }}>OUR STORY</div>
        <div style={{ fontFamily: A.serif, fontSize: 28, fontWeight: 700, marginTop: 2 }}>年表</div>
      </div>

      {/* filters */}
      <div style={{ padding: '4px 20px 14px', display: 'flex', gap: 6, overflow: 'hidden' }}>
        <Chip active>すべて</Chip>
        <Chip>自分</Chip>
        <Chip>子供</Chip>
        <Chip>家族</Chip>
      </div>

      <div style={{ padding: '0 20px', position: 'relative' }}>
        {/* vertical line */}
        <div style={{
          position: 'absolute', left: 36, top: 8, bottom: 0,
          width: 1, background: A.line,
        }} />
        {rows.map((r, ri) => (
          <div key={r.year} style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
              <div style={{
                width: 36, textAlign: 'center', fontFamily: A.serif,
                fontSize: 22, fontWeight: 700,
                color: r.current ? A.accent : A.ink,
              }}>{r.year.slice(2)}</div>
              <div style={{ fontFamily: A.serif, fontSize: 11, letterSpacing: 3,
                color: A.ink2, paddingTop: 2 }}>
                {r.year}年 ・ {r.age}歳
                {r.current && <span style={{ color: A.accent, marginLeft: 6, fontWeight: 700 }}>● 今ここ</span>}
              </div>
            </div>
            {r.items.map((it, i) => (
              <div key={i} style={{
                marginLeft: 50, marginBottom: 8,
                background: A.surface, borderRadius: 14, padding: '12px 14px',
                border: `1px solid ${A.line}`,
                borderLeft: `4px solid ${it.c}`,
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', left: -23, top: 22,
                  width: 8, height: 8, borderRadius: 8, background: it.c,
                  boxShadow: `0 0 0 3px ${A.bg}`,
                }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ fontFamily: A.serif, fontSize: 14, fontWeight: 700 }}>{it.name}</div>
                  <div style={{ fontSize: 11, color: A.ink2 }}>{it.date}</div>
                </div>
                <div style={{ fontSize: 11, color: A.ink3, marginTop: 2 }}>{it.sub}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <TabBar active="time" />
    </div>
  );
}

// ── SETTINGS ──────────────────────────────────────────────────────────────
function SettingsA() {
  return (
    <div style={{
      width: '100%', height: '100%', background: A.bg, fontFamily: A.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: A.ink,
    }}>
      <div style={{ padding: '8px 24px 14px' }}>
        <div style={{ fontFamily: A.serif, fontSize: 28, fontWeight: 700 }}>設定</div>
      </div>

      {/* Profile */}
      <div style={{
        margin: '0 16px', background: A.surface, borderRadius: 20,
        padding: 18, border: `1px solid ${A.line}`,
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: 28,
          background: `linear-gradient(135deg, ${A.accent}, ${A.ev.celebration})`,
          color: '#fff', display: 'grid', placeItems: 'center',
          fontFamily: A.serif, fontSize: 22, fontWeight: 700,
        }}>佐</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: A.serif, fontSize: 17, fontWeight: 700 }}>佐藤 美咲</div>
          <div style={{ fontSize: 12, color: A.ink2, marginTop: 2 }}>misaki@example.com</div>
          <div style={{
            display: 'inline-block', marginTop: 6, fontSize: 10,
            color: A.accent, fontWeight: 700, letterSpacing: 1,
            padding: '2px 8px', border: `1px solid ${A.accent}`, borderRadius: 999,
          }}>FAMILY プラン</div>
        </div>
      </div>

      {/* family album thumbnails */}
      <div style={{ padding: '20px 20px 8px' }}>
        <div style={{ fontFamily: A.serif, fontSize: 13, color: A.ink2, letterSpacing: 2, marginBottom: 8 }}>共有メンバー ・ 4人</div>
        <div style={{ display: 'flex', gap: 10 }}>
          {[
            { name: '夫', c: '#7E8C7B' },
            { name: '蓮', c: A.ev.celebration },
            { name: '葵', c: A.ev.wedding },
            { name: '母', c: '#6E5380' },
            { name: '+', c: A.ink3 },
          ].map(p => (
            <div key={p.name} style={{
              width: 44, height: 44, borderRadius: 22, background: p.c,
              color: '#fff', fontFamily: A.serif, fontWeight: 700, fontSize: 16,
              display: 'grid', placeItems: 'center',
              border: '2px solid #FFFCF7',
            }}>{p.name}</div>
          ))}
        </div>
      </div>

      {/* settings list */}
      <div style={{ padding: '8px 16px 0' }}>
        <div style={{
          background: A.surface, borderRadius: 16, border: `1px solid ${A.line}`,
          overflow: 'hidden',
        }}>
          {[
            { ico: '✦', t: '通知', sub: 'タスク前日にお知らせ', tail: 'オン' },
            { ico: '☷', t: '表示テーマ', sub: 'クリーム', tail: '›' },
            { ico: '✎', t: 'プロフィール編集', sub: '', tail: '›' },
            { ico: '⌖', t: 'イベントの色設定', sub: '', tail: '›' },
            { ico: '⇄', t: '外部サービス連携', sub: '着付け・法律家など 12 件', tail: '›', badge: 'NEW' },
            { ico: '☆', t: 'プランをアップグレード', sub: '無制限のイベント', tail: '›', accent: true },
          ].map((r, i, arr) => (
            <div key={r.t} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '14px 16px',
              borderBottom: i < arr.length - 1 ? `1px solid ${A.line}` : 'none',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 10,
                background: r.accent ? A.accent : A.surfaceAlt,
                color: r.accent ? '#fff' : A.ink, display: 'grid', placeItems: 'center',
                fontSize: 15, fontFamily: A.serif,
              }}>{r.ico}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                  {r.t}
                  {r.badge && (
                    <span style={{
                      fontSize: 8.5, fontWeight: 800, letterSpacing: 1.5,
                      color: '#fff', background: A.accent, padding: '1px 6px', borderRadius: 999,
                    }}>{r.badge}</span>
                  )}
                </div>
                {r.sub && <div style={{ fontSize: 11, color: A.ink2, marginTop: 1 }}>{r.sub}</div>}
              </div>
              <div style={{ fontSize: 12, color: A.ink3, fontWeight: 600 }}>{r.tail}</div>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center', marginTop: 18, fontFamily: A.serif,
          fontSize: 11, color: A.ink3, letterSpacing: 3,
        }}>LIFEPATH ・ v 1.0</div>
      </div>

      <TabBar active="set" />
    </div>
  );
}

Object.assign(window, { HomeA, CalendarA, TimelineA, SettingsA });
