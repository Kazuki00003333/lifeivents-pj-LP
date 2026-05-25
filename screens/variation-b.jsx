/* eslint-disable */
// Variation B: Editorial Noir — Dark, chic, magazine-like
// Deep warm-charcoal base, champagne gold accent, modern serif display
const B = {
  bg:        '#121110',
  surface:   '#1B1917',
  surfaceAlt:'#26231F',
  line:      '#2E2A24',
  lineSoft:  '#221F1B',
  ink:       '#F2EDE3',
  ink2:      '#A39C8E',
  ink3:      '#67625A',
  gold:      '#C9A876',
  goldDeep:  '#8E7544',
  ev: {
    wedding:     '#B97A6E', // dusty rose
    funeral:     '#8E8FA8', // muted slate
    celebration: '#C9A876', // champagne
    other:       '#8DA197', // sage gray
  },
  serif:   '"DM Serif Display", "Noto Serif JP", serif',
  serifJP: '"Noto Serif JP", serif',
  sans:    '"Plus Jakarta Sans", "Noto Sans JP", system-ui, sans-serif',
  mono:    '"JetBrains Mono", ui-monospace, monospace',
};

function TabBarB({ active }) {
  const items = [
    { k: 'home', label: 'HOME',     jp: 'ホーム' },
    { k: 'cal',  label: 'CALENDAR', jp: 'カレンダー' },
    { k: 'time', label: 'STORY',    jp: '年表' },
    { k: 'set',  label: 'SETTINGS', jp: '設定' },
  ];
  const Icon = ({k, on}) => {
    const stroke = on ? B.gold : B.ink3;
    const sw = 1.4;
    if (k === 'home') return <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke={stroke} strokeWidth={sw}><path d="M3 10 L11 3 L19 10 V18 H3 Z"/><path d="M9 18 V13 H13 V18"/></svg>;
    if (k === 'cal')  return <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke={stroke} strokeWidth={sw}><rect x="3" y="5" width="16" height="14"/><path d="M3 9 H19 M8 3 V6 M14 3 V6"/></svg>;
    if (k === 'time') return <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke={stroke} strokeWidth={sw}><circle cx="11" cy="11" r="8"/><path d="M11 6 V11 L14 13"/></svg>;
    return <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke={stroke} strokeWidth={sw}><circle cx="11" cy="11" r="3"/><path d="M11 2 V4 M11 18 V20 M2 11 H4 M18 11 H20 M4.6 4.6 L6 6 M16 16 L17.4 17.4 M4.6 17.4 L6 16 M16 6 L17.4 4.6"/></svg>;
  };
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      padding: '12px 16px 26px', background: B.surface,
      borderTop: `1px solid ${B.line}`,
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4,
    }}>
      {items.map(it => {
        const on = it.k === active;
        return (
          <div key={it.k} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            padding: '6px 0', color: on ? B.gold : B.ink3,
          }}>
            <Icon k={it.k} on={on}/>
            <div style={{
              fontFamily: B.sans, fontSize: 8.5, fontWeight: 700, letterSpacing: 2.5,
            }}>{it.label}</div>
          </div>
        );
      })}
    </div>
  );
}

// editorial section rule
function Rule({ label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10, padding: '0 22px', margin: '0 0 14px',
    }}>
      <div style={{ width: 18, height: 1, background: B.gold }}/>
      <div style={{
        fontFamily: B.sans, fontSize: 9.5, fontWeight: 700, letterSpacing: 4,
        color: B.gold,
      }}>{label}</div>
      <div style={{ flex: 1, height: 1, background: B.line }}/>
    </div>
  );
}

function HomeB() {
  return (
    <div style={{
      width: '100%', height: '100%', background: B.bg, fontFamily: B.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: B.ink,
    }}>
      {/* Masthead */}
      <div style={{
        padding: '4px 22px 18px',
        borderBottom: `1px solid ${B.line}`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      }}>
        <div>
          <div style={{
            fontFamily: B.sans, fontSize: 9.5, fontWeight: 700, letterSpacing: 5,
            color: B.gold,
          }}>LIFEPATH / VOL.026</div>
          <div style={{
            fontFamily: B.serif, fontSize: 34, fontWeight: 400, marginTop: 8,
            lineHeight: 1.05, letterSpacing: -0.5,
          }}>
            <em style={{ fontStyle: 'italic', color: B.gold }}>Good</em> evening,<br/>
            Misaki.
          </div>
        </div>
        <div style={{
          fontFamily: B.mono, fontSize: 10, color: B.ink3, letterSpacing: 1,
          textAlign: 'right', paddingBottom: 4,
        }}>
          03 . 12<br/>2026
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '20px 22px 18px', borderBottom: `1px solid ${B.line}` }}>
        <div style={{
          fontFamily: B.sans, fontSize: 9, fontWeight: 700, letterSpacing: 4, color: B.ink2,
        }}>FEATURED — UPCOMING</div>
        <div style={{
          fontFamily: B.serif, fontSize: 28, lineHeight: 1.15, marginTop: 10, fontWeight: 400,
          letterSpacing: -0.3,
        }}>
          長男・蓮の<br/>
          <em style={{ fontStyle: 'italic', fontWeight: 400 }}>七五三</em>
        </div>
        <div style={{
          fontFamily: B.serifJP, fontSize: 12, color: B.ink2, marginTop: 8, lineHeight: 1.6,
        }}>
          2026年3月15日（日）<br/>川越氷川神社・10時参拝
        </div>

        <div style={{
          marginTop: 18, display: 'flex', alignItems: 'flex-end', gap: 14,
          paddingTop: 14, borderTop: `1px solid ${B.lineSoft}`,
        }}>
          <div>
            <div style={{ fontFamily: B.mono, fontSize: 9, color: B.ink3, letterSpacing: 2 }}>D-DAY</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginTop: 4 }}>
              <div style={{ fontFamily: B.serif, fontSize: 44, color: B.gold, lineHeight: 0.9, letterSpacing: -2 }}>47</div>
              <div style={{ fontFamily: B.sans, fontSize: 10, color: B.ink3, letterSpacing: 2 }}>DAYS</div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontFamily: B.mono, fontSize: 9, color: B.ink3, letterSpacing: 2, marginBottom: 6,
            }}>
              <span>PREPARATION</span><span>06 / 15</span>
            </div>
            <div style={{ height: 1, background: B.line, position: 'relative' }}>
              <div style={{ width: '40%', height: 1, background: B.gold }}/>
              <div style={{
                position: 'absolute', left: '40%', top: -2, width: 5, height: 5,
                borderRadius: 5, background: B.gold,
              }}/>
            </div>
          </div>
        </div>
      </div>

      {/* Next list */}
      <div style={{ paddingTop: 18 }}>
        <Rule label="NEXT UP — 3 ITEMS" />
        <div style={{ padding: '0 22px' }}>
          {[
            { c: B.ev.celebration, t: '写真館の予約',         e: 'Shichi-Go-San',      d: '03.15', n: 12 },
            { c: B.ev.wedding,     t: '招待状デザインの確定', e: 'Misaki\'s Wedding',  d: '04.10', n: 38 },
            { c: B.ev.funeral,     t: '法要会場の予約',       e: 'Memorial Service',   d: '04.01', n: 5, urgent: true },
          ].map((t, i, arr) => (
            <div key={i} style={{
              display: 'flex', gap: 14, padding: '14px 0', alignItems: 'flex-start',
              borderTop: i === 0 ? 'none' : `1px solid ${B.lineSoft}`,
            }}>
              <div style={{
                fontFamily: B.serif, fontSize: 22, color: t.c, lineHeight: 1, paddingTop: 2,
                width: 50, letterSpacing: -1,
              }}>{t.d.split('.')[0]}<span style={{ color: B.ink3, fontSize: 14 }}>.</span><span style={{ fontSize: 18 }}>{t.d.split('.')[1]}</span></div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: B.serifJP, fontSize: 15, fontWeight: 600, color: B.ink, lineHeight: 1.3,
                }}>{t.t}</div>
                <div style={{
                  fontFamily: B.sans, fontSize: 10, color: B.ink2, marginTop: 4,
                  letterSpacing: 2, textTransform: 'uppercase',
                }}>{t.e}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                {t.urgent ? (
                  <div style={{
                    fontFamily: B.sans, fontSize: 8.5, fontWeight: 800, letterSpacing: 2,
                    color: B.bg, background: B.gold, padding: '3px 8px',
                  }}>URGENT</div>
                ) : (
                  <div style={{ fontFamily: B.mono, fontSize: 10, color: B.ink3, letterSpacing: 1 }}>
                    {t.n} <span style={{ color: B.ink3 }}>D</span>
                  </div>
                )}
                {t.urgent && (
                  <div style={{ fontFamily: B.mono, fontSize: 10, color: B.gold, letterSpacing: 1, marginTop: 4 }}>
                    {t.n} D
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <TabBarB active="home" />
    </div>
  );
}

function CalendarB() {
  const eventsOnDay = { 3: B.ev.wedding, 8: B.ev.celebration, 15: B.ev.celebration, 21: B.ev.funeral, 27: B.ev.other };
  const days = Array.from({length: 35}, (_,i) => i - 5);
  return (
    <div style={{
      width: '100%', height: '100%', background: B.bg, fontFamily: B.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: B.ink,
    }}>
      <div style={{
        padding: '4px 22px 18px', borderBottom: `1px solid ${B.line}`,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontFamily: B.sans, fontSize: 9, fontWeight: 700, letterSpacing: 5, color: B.gold }}>
            ANNO MMXXVI
          </div>
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 8,
          }}>
            <div style={{ fontFamily: B.serif, fontSize: 44, lineHeight: 1, letterSpacing: -1 }}>
              <em style={{ fontStyle: 'italic', color: B.gold }}>March</em>
            </div>
            <div style={{ fontFamily: B.mono, fontSize: 11, color: B.ink3, letterSpacing: 2 }}>03</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4, paddingBottom: 6 }}>
          <div style={{
            width: 32, height: 32, border: `1px solid ${B.line}`,
            display: 'grid', placeItems: 'center', color: B.ink2,
            fontFamily: B.serif, fontSize: 18,
          }}>‹</div>
          <div style={{
            width: 32, height: 32, background: B.gold,
            display: 'grid', placeItems: 'center', color: B.bg,
            fontFamily: B.serif, fontSize: 18,
          }}>›</div>
        </div>
      </div>

      <div style={{ padding: '16px 14px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: 10 }}>
          {['S','M','T','W','T','F','S'].map((d,i) => (
            <div key={i} style={{
              textAlign: 'center', fontFamily: B.sans, fontSize: 9, fontWeight: 700,
              paddingBottom: 6, borderBottom: `1px solid ${B.line}`, letterSpacing: 2,
              color: i===0 ? B.ev.wedding : (i===6 ? B.ev.funeral : B.ink2),
            }}>{d}</div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
          {days.map((d, i) => {
            const real = d > 0 && d <= 31;
            const isToday = d === 12;
            const ev = eventsOnDay[d];
            return (
              <div key={i} style={{
                aspectRatio: '1', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', position: 'relative',
                fontFamily: B.serif, fontSize: 17,
                color: !real ? B.ink3 : (i%7===0 ? B.ev.wedding : (i%7===6 ? B.ev.funeral : B.ink)),
              }}>
                {isToday && (
                  <div style={{
                    position: 'absolute', inset: '14% 12%',
                    border: `1px solid ${B.gold}`,
                  }}/>
                )}
                <div style={{ zIndex: 1, color: isToday ? B.gold : 'inherit' }}>
                  {real ? d : (d <= 0 ? 28+d : d-31)}
                </div>
                {ev && real && <div style={{
                  width: 4, height: 4, background: ev, marginTop: 3,
                }}/>}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ paddingTop: 22 }}>
        <Rule label="ON THIS DAY — 03 / 15" />
        <div style={{ padding: '0 22px' }}>
          {[
            { c: B.ev.celebration, t: '長男・蓮の七五三', sub: '10:00 — 14:00',  loc: '川越氷川神社' },
            { c: B.ev.other,       t: '家族写真撮影',     sub: '15:00 — 16:30',  loc: 'スタジオAOI' },
          ].map((e,i, arr) => (
            <div key={i} style={{
              display: 'flex', gap: 14, padding: '14px 0',
              borderTop: i === 0 ? 'none' : `1px solid ${B.lineSoft}`,
            }}>
              <div style={{ width: 2, alignSelf: 'stretch', background: e.c }}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: B.serifJP, fontSize: 15, fontWeight: 600, color: B.ink }}>{e.t}</div>
                <div style={{
                  fontFamily: B.mono, fontSize: 10, color: B.ink2, marginTop: 5, letterSpacing: 1.5,
                  display: 'flex', gap: 12,
                }}>
                  <span>{e.sub}</span>
                  <span style={{ color: B.ink3 }}>·</span>
                  <span>{e.loc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TabBarB active="cal" />
    </div>
  );
}

function TimelineB() {
  const rows = [
    { y: '2027', age: 36, items: [
      { c: B.ev.celebration, name: '長女・葵の七五三', date: 'NOV', sub: '3 years · 753' },
    ]},
    { y: '2026', age: 35, current: true, items: [
      { c: B.ev.celebration, name: '長男・蓮の七五三',  date: 'MAR 15', sub: '5 years · 753' },
      { c: B.ev.wedding,     name: '妹・美咲の結婚式',  date: 'APR 20', sub: 'Family attendance' },
      { c: B.ev.funeral,     name: '祖父・一周忌',      date: 'APR 01', sub: 'Memorial service' },
    ]},
    { y: '2025', age: 34, items: [
      { c: B.ev.other, name: '次男・誕生', date: 'JUL 03', sub: 'Family record' },
    ]},
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: B.bg, fontFamily: B.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: B.ink,
    }}>
      <div style={{
        padding: '4px 22px 18px', borderBottom: `1px solid ${B.line}`,
      }}>
        <div style={{ fontFamily: B.sans, fontSize: 9, fontWeight: 700, letterSpacing: 5, color: B.gold }}>
          A LIFE IN CHAPTERS
        </div>
        <div style={{
          fontFamily: B.serif, fontSize: 34, marginTop: 8, letterSpacing: -1, lineHeight: 1,
        }}>
          <em style={{ fontStyle: 'italic' }}>The</em> Timeline
        </div>
      </div>

      <div style={{
        padding: '14px 22px 6px', display: 'flex', gap: 6, overflow: 'hidden',
      }}>
        {[['ALL', true], ['SELF'], ['CHILDREN'], ['FAMILY']].map(([l, on], i) => (
          <div key={i} style={{
            padding: '5px 12px',
            background: on ? B.gold : 'transparent',
            color: on ? B.bg : B.ink2,
            border: `1px solid ${on ? B.gold : B.line}`,
            fontFamily: B.sans, fontSize: 9, fontWeight: 800, letterSpacing: 2,
          }}>{l}</div>
        ))}
      </div>

      <div style={{ padding: '10px 22px 0' }}>
        {rows.map(r => (
          <div key={r.y} style={{
            paddingTop: 18, paddingBottom: 4, borderTop: `1px solid ${B.line}`,
            marginTop: 4,
          }}>
            <div style={{
              display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
              marginBottom: 12,
            }}>
              <div style={{
                fontFamily: B.serif, fontSize: 38, lineHeight: 1, letterSpacing: -2,
                color: r.current ? B.gold : B.ink,
              }}>
                {r.y}
              </div>
              <div style={{
                fontFamily: B.mono, fontSize: 10, color: B.ink3, letterSpacing: 2, textAlign: 'right',
              }}>
                AGE {r.age}
                {r.current && <div style={{ color: B.gold, marginTop: 3 }}>● PRESENT</div>}
              </div>
            </div>
            {r.items.map((it, i) => (
              <div key={i} style={{
                display: 'flex', gap: 14, padding: '10px 0',
                borderTop: i === 0 ? `1px solid ${B.lineSoft}` : `1px solid ${B.lineSoft}`,
              }}>
                <div style={{
                  width: 2, alignSelf: 'stretch', background: it.c,
                }}/>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                    <div style={{
                      fontFamily: B.serifJP, fontSize: 15, fontWeight: 600, color: B.ink,
                    }}>{it.name}</div>
                    <div style={{
                      fontFamily: B.mono, fontSize: 9.5, color: B.ink2, letterSpacing: 1.5,
                    }}>{it.date}</div>
                  </div>
                  <div style={{
                    fontFamily: B.sans, fontSize: 10, color: B.ink3, marginTop: 4, letterSpacing: 2,
                    textTransform: 'uppercase',
                  }}>{it.sub}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <TabBarB active="time" />
    </div>
  );
}

function SettingsB() {
  return (
    <div style={{
      width: '100%', height: '100%', background: B.bg, fontFamily: B.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: B.ink,
    }}>
      <div style={{ padding: '4px 22px 18px', borderBottom: `1px solid ${B.line}` }}>
        <div style={{ fontFamily: B.sans, fontSize: 9, fontWeight: 700, letterSpacing: 5, color: B.gold }}>
          ACCOUNT & PREFERENCES
        </div>
        <div style={{
          fontFamily: B.serif, fontSize: 34, marginTop: 8, letterSpacing: -1, lineHeight: 1,
        }}>
          <em style={{ fontStyle: 'italic' }}>Settings.</em>
        </div>
      </div>

      <div style={{
        padding: '20px 22px 22px', borderBottom: `1px solid ${B.line}`,
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <div style={{
          width: 60, height: 60,
          border: `1px solid ${B.gold}`,
          display: 'grid', placeItems: 'center',
          fontFamily: B.serif, fontSize: 28, color: B.gold,
        }}>M</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: B.serifJP, fontSize: 18, fontWeight: 600 }}>佐藤 美咲</div>
          <div style={{ fontFamily: B.mono, fontSize: 10, color: B.ink2, marginTop: 4, letterSpacing: 1 }}>
            misaki@example.com
          </div>
          <div style={{
            display: 'inline-block', marginTop: 8, fontFamily: B.sans,
            fontSize: 9, fontWeight: 800, color: B.gold, letterSpacing: 2.5,
            paddingBottom: 1, borderBottom: `1px solid ${B.gold}`,
          }}>FAMILY · MEMBER</div>
        </div>
      </div>

      <div style={{ paddingTop: 20 }}>
        <Rule label="SHARED MEMBERS — 4" />
        <div style={{ padding: '0 22px 20px', display: 'flex', gap: 10 }}>
          {[
            { n: '夫', c: B.ev.other },
            { n: '蓮', c: B.gold },
            { n: '葵', c: B.ev.wedding },
            { n: '母', c: B.ev.funeral },
            { n: '+', c: B.line, plus: true },
          ].map(p => (
            <div key={p.n} style={{
              width: 42, height: 42,
              background: 'transparent',
              border: `1px solid ${p.c}`,
              color: p.plus ? B.ink3 : p.c,
              fontFamily: B.serifJP, fontWeight: 600, fontSize: 16,
              display: 'grid', placeItems: 'center',
            }}>{p.n}</div>
          ))}
        </div>

        <div style={{ borderTop: `1px solid ${B.line}` }}>
          {[
            { t: '通知',                   en: 'NOTIFICATIONS',   sub: 'タスク前日にお知らせ',   tail: 'ON' },
            { t: '表示テーマ',             en: 'APPEARANCE',      sub: 'Editorial Noir',         tail: '›' },
            { t: 'プロフィール編集',       en: 'PROFILE',          sub: '',                       tail: '›' },
            { t: 'イベントの色設定',       en: 'EVENT COLORS',    sub: '',                       tail: '›' },
            { t: 'プランをアップグレード', en: 'UPGRADE PLAN',     sub: '無制限のイベント',       tail: '›', accent: true },
          ].map((r, i) => (
            <div key={r.t} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '16px 22px',
              borderBottom: `1px solid ${B.lineSoft}`,
            }}>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: B.sans, fontSize: 8.5, fontWeight: 800, letterSpacing: 2.5,
                  color: r.accent ? B.gold : B.ink2,
                }}>{r.en}</div>
                <div style={{ fontFamily: B.serifJP, fontSize: 14, fontWeight: 600, marginTop: 4 }}>{r.t}</div>
                {r.sub && <div style={{
                  fontFamily: B.sans, fontSize: 11, color: B.ink2, marginTop: 3,
                }}>{r.sub}</div>}
              </div>
              <div style={{
                fontFamily: B.serif, fontSize: 14,
                color: r.accent ? B.gold : B.ink3,
              }}>{r.tail}</div>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center', marginTop: 18, fontFamily: B.mono,
          fontSize: 9.5, color: B.ink3, letterSpacing: 4,
        }}>L I F E P A T H · V 1.0</div>
      </div>

      <TabBarB active="set" />
    </div>
  );
}

Object.assign(window, { HomeB, CalendarB, TimelineB, SettingsB });
