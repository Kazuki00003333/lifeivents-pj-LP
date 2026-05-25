/* eslint-disable */
// Multi-event TOP-card patterns — built on Variation A (cream)
// Three approaches: Carousel, Stack, List

const M = {
  bg: '#F6EFE4',
  surface: '#FFFCF7',
  surfaceAlt: '#EFE5D4',
  ink: '#2A201A',
  ink2: '#6F5F52',
  ink3: '#A89A8B',
  line: '#E6DAC5',
  accent: '#B5572E',
  accentSoft: '#E9C7AE',
  ev: {
    wedding: '#B5485C',
    funeral: '#6E5380',
    celebration: '#C28534',
    other: '#7E8C7B',
  },
  serif: '"Noto Serif JP", "Shippori Mincho", serif',
  sans:  '"Noto Sans JP", -apple-system, system-ui, sans-serif',
};

const EVENTS = [
  { c: M.ev.celebration, tag: 'お祝い', name: '長男・蓮の七五三',  date: '2026年3月15日（日）', loc: '川越氷川神社',         days: 47, prog: '6/15' },
  { c: M.ev.wedding,     tag: '結婚式', name: '妹・美咲の結婚式',  date: '2026年4月20日（月）', loc: '東京・帝国ホテル',     days: 83, prog: '3/22' },
  { c: M.ev.funeral,     tag: '法要',   name: '祖父・一周忌',     date: '2026年4月1日（水）',  loc: '川崎・廣徳寺',         days: 64, prog: '2/8'  },
];

// Header common to all 3
function Header({ title }) {
  return (
    <div style={{ padding: '8px 24px 14px' }}>
      <div style={{ fontFamily: M.serif, fontSize: 13, color: M.ink2, letterSpacing: 4 }}>
        2026 ・ 春
      </div>
      <div style={{ fontFamily: M.serif, fontSize: 22, fontWeight: 600, marginTop: 4, letterSpacing: 1 }}>
        おかえりなさい、佐藤さん。
      </div>
      <div style={{
        marginTop: 10, fontSize: 11, fontWeight: 700, letterSpacing: 3, color: M.accent,
      }}>{title}</div>
    </div>
  );
}

function TabBarM({ active }) {
  const items = [
    { k: 'home', label: 'ホーム', icon: '◇' },
    { k: 'cal',  label: 'カレンダー', icon: '▤' },
    { k: 'time', label: '年表', icon: '⌖' },
    { k: 'set',  label: '設定', icon: '⚙' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      padding: '8px 12px 28px', background: M.surface,
      borderTop: `1px solid ${M.line}`,
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4,
      fontFamily: M.sans,
    }}>
      {items.map(it => {
        const on = it.k === active;
        return (
          <div key={it.k} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            padding: '6px 0', color: on ? M.accent : M.ink3,
          }}>
            <div style={{ fontSize: 20, lineHeight: 1 }}>{it.icon}</div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 0.5 }}>{it.label}</div>
          </div>
        );
      })}
    </div>
  );
}

// Common big event card
function BigEventCard({ ev, width = 350, active = true }) {
  return (
    <div style={{
      width, flexShrink: 0,
      background: M.surface, borderRadius: 20, overflow: 'hidden',
      boxShadow: active ? '0 4px 20px rgba(60,40,20,0.08)' : '0 1px 4px rgba(60,40,20,0.04)',
      border: `1px solid ${M.line}`,
      opacity: active ? 1 : 0.85,
    }}>
      <div style={{
        height: 90,
        background: `linear-gradient(135deg, ${ev.c}28, ${M.accentSoft}60)`,
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 14px)',
        }}/>
        <div style={{
          position: 'absolute', right: 16, top: 12, fontFamily: M.serif,
          fontSize: 11, color: M.ink2, fontWeight: 600,
        }}>あと <span style={{ fontSize: 26, color: M.accent, fontWeight: 700 }}>{ev.days}</span> 日</div>
      </div>
      <div style={{ padding: '12px 18px 16px' }}>
        <div style={{ fontSize: 10, color: ev.c, fontWeight: 700, letterSpacing: 2 }}>{ev.tag}</div>
        <div style={{ fontFamily: M.serif, fontSize: 18, fontWeight: 700, marginTop: 2 }}>{ev.name}</div>
        <div style={{ fontSize: 11, color: M.ink2, marginTop: 4 }}>
          {ev.date} ・ {ev.loc}
        </div>
        <div style={{
          marginTop: 10, display: 'flex', alignItems: 'center', gap: 8,
          fontSize: 11, color: M.ink2,
        }}>
          <div style={{ flex: 1, height: 4, background: M.surfaceAlt, borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ width: '40%', height: '100%', background: ev.c }}/>
          </div>
          <div style={{ fontWeight: 600 }}>{ev.prog}</div>
        </div>
      </div>
    </div>
  );
}

// ─── ① CAROUSEL ─────────────────────────────────────────────────────
function HomeMulti1() {
  return (
    <div style={{
      width: '100%', height: '100%', background: M.bg, fontFamily: M.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: M.ink,
      position: 'relative',
    }}>
      <Header title="① スワイプ・カルーセル" />
      <div style={{ position: 'relative' }}>
        <div style={{
          display: 'flex', gap: 12, paddingLeft: 20, paddingRight: 20,
          overflow: 'hidden',
        }}>
          {EVENTS.map((ev, i) => (
            <BigEventCard key={i} ev={ev} width={320} active={i === 0} />
          ))}
        </div>
        {/* dots */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 6, marginTop: 14,
        }}>
          {EVENTS.map((_, i) => (
            <div key={i} style={{
              width: i === 0 ? 22 : 6, height: 6, borderRadius: 6,
              background: i === 0 ? M.accent : M.line,
              transition: 'width .2s',
            }}/>
          ))}
        </div>
        <div style={{
          textAlign: 'center', marginTop: 10, fontSize: 11, color: M.ink3,
        }}>
          ← スワイプして他の{EVENTS.length - 1}件を確認 →
        </div>
      </div>

      <div style={{ padding: '22px 20px 0' }}>
        <div style={{ fontFamily: M.serif, fontSize: 16, fontWeight: 700, marginBottom: 10 }}>
          このイベントのタスク
        </div>
        {[
          { c: EVENTS[0].c, t: '写真館の予約', d: '3/15まで', n: 12 },
          { c: EVENTS[0].c, t: '着物・衣装の予約', d: '3/01まで', n: -2, urgent: true },
        ].map((t, i) => (
          <div key={i} style={{
            background: M.surface, borderRadius: 14, padding: '12px 14px',
            border: `1px solid ${M.line}`, marginBottom: 8,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ width: 3, alignSelf: 'stretch', background: t.c, borderRadius: 3, minHeight: 30 }}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{t.t}</div>
              <div style={{ fontSize: 11, color: t.urgent ? '#B33A2B' : M.ink3, marginTop: 2 }}>{t.d}</div>
            </div>
          </div>
        ))}
      </div>

      <TabBarM active="home" />
    </div>
  );
}

// ─── ② STACKED DECK ───────────────────────────────────────────────────
function HomeMulti2() {
  return (
    <div style={{
      width: '100%', height: '100%', background: M.bg, fontFamily: M.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: M.ink,
      position: 'relative',
    }}>
      <Header title="② スタック・デッキ" />

      <div style={{ padding: '0 20px', position: 'relative', height: 280 }}>
        {/* back card 2 */}
        <div style={{
          position: 'absolute', left: 40, right: 40, top: 22,
          background: M.surface, borderRadius: 18, height: 60,
          border: `1px solid ${M.line}`,
          boxShadow: '0 1px 4px rgba(60,40,20,0.04)',
          opacity: 0.6,
        }}/>
        {/* back card 1 */}
        <div style={{
          position: 'absolute', left: 28, right: 28, top: 12,
          background: M.surface, borderRadius: 20, height: 80,
          border: `1px solid ${M.line}`,
          boxShadow: '0 2px 8px rgba(60,40,20,0.06)',
          padding: '14px 18px 0',
          opacity: 0.85,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: 8, background: EVENTS[1].c }}/>
            <div style={{ fontFamily: M.serif, fontSize: 14, fontWeight: 700, color: M.ink2 }}>
              {EVENTS[1].name}
            </div>
            <div style={{ marginLeft: 'auto', fontFamily: M.serif, fontSize: 11, color: M.ink3 }}>
              あと {EVENTS[1].days} 日
            </div>
          </div>
        </div>
        {/* main card */}
        <div style={{ position: 'absolute', left: 0, right: 0, top: 0, padding: '0 16px' }}>
          <BigEventCard ev={EVENTS[0]} width="100%" />
        </div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6,
        marginTop: -10, fontSize: 11, color: M.ink3,
      }}>
        <div style={{
          padding: '4px 10px', background: M.surfaceAlt, borderRadius: 999,
          fontWeight: 700, color: M.ink2, fontSize: 10, letterSpacing: 1,
        }}>あと{EVENTS.length - 1}件のイベント</div>
        <span style={{ color: M.accent }}>↓</span>
      </div>

      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ fontFamily: M.serif, fontSize: 16, fontWeight: 700, marginBottom: 10 }}>
          次にやること
        </div>
        {[
          { c: EVENTS[0].c, t: '写真館の予約', e: '長男の七五三', d: '3/15' },
          { c: EVENTS[1].c, t: '招待状デザイン', e: '妹の結婚式',   d: '4/10' },
        ].map((t, i) => (
          <div key={i} style={{
            background: M.surface, borderRadius: 14, padding: '12px 14px',
            border: `1px solid ${M.line}`, marginBottom: 8,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ width: 3, alignSelf: 'stretch', background: t.c, borderRadius: 3, minHeight: 32 }}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{t.t}</div>
              <div style={{ fontSize: 11, color: M.ink2, marginTop: 1 }}>{t.e}</div>
            </div>
            <div style={{ fontSize: 11, color: M.ink3, fontWeight: 600 }}>{t.d}</div>
          </div>
        ))}
      </div>

      <TabBarM active="home" />
    </div>
  );
}

// ─── ③ LIST VIEW ──────────────────────────────────────────────────────
function HomeMulti3() {
  return (
    <div style={{
      width: '100%', height: '100%', background: M.bg, fontFamily: M.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: M.ink,
      position: 'relative',
    }}>
      <Header title="③ リスト型" />

      <div style={{ padding: '0 20px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ fontFamily: M.serif, fontSize: 17, fontWeight: 700 }}>
          近づくイベント
          <span style={{ fontSize: 11, color: M.ink3, marginLeft: 8, fontWeight: 500 }}>3件</span>
        </div>
      </div>

      <div style={{ padding: '0 16px' }}>
        {EVENTS.map((ev, i) => (
          <div key={i} style={{
            background: M.surface, borderRadius: 16, padding: '14px 16px',
            border: `1px solid ${M.line}`, marginBottom: 8,
            display: 'flex', alignItems: 'center', gap: 14,
            boxShadow: i === 0 ? '0 4px 14px rgba(60,40,20,0.07)' : 'none',
            position: 'relative', overflow: 'hidden',
          }}>
            {i === 0 && (
              <div style={{
                position: 'absolute', top: 0, right: 0,
                fontSize: 9, fontWeight: 700, color: '#fff', background: M.accent,
                padding: '3px 10px', letterSpacing: 1, borderBottomLeftRadius: 8,
              }}>NEXT</div>
            )}
            <div style={{
              width: 52, textAlign: 'center', flexShrink: 0,
              padding: '6px 0', borderRadius: 10,
              background: `${ev.c}18`,
            }}>
              <div style={{
                fontSize: 9, color: ev.c, fontWeight: 700, letterSpacing: 1.5,
              }}>{ev.date.match(/(\d+)月/)[1]}月</div>
              <div style={{
                fontFamily: M.serif, fontSize: 20, fontWeight: 700, color: ev.c, lineHeight: 1,
              }}>{ev.date.match(/(\d+)日/)[1]}</div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 9, color: ev.c, fontWeight: 700, letterSpacing: 1.5 }}>{ev.tag}</div>
              <div style={{
                fontFamily: M.serif, fontSize: 15, fontWeight: 700, marginTop: 1,
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>{ev.name}</div>
              <div style={{
                display: 'flex', justifyContent: 'space-between', marginTop: 4,
                fontSize: 11, color: M.ink2,
              }}>
                <span>{ev.loc}</span>
                <span style={{ color: M.ink3, fontWeight: 600 }}>
                  <span style={{ color: i === 0 ? M.accent : M.ink2, fontWeight: 700 }}>あと{ev.days}日</span>
                  <span style={{ margin: '0 6px', color: M.ink3 }}>・</span>
                  {ev.prog}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '16px 20px 0', fontSize: 11, color: M.accent, fontWeight: 700 }}>
        ＋ 新しいイベントを追加
      </div>

      <TabBarM active="home" />
    </div>
  );
}

Object.assign(window, { HomeMulti1, HomeMulti2, HomeMulti3 });
