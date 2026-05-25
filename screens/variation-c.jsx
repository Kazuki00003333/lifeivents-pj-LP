/* eslint-disable */
// Variation C: Architectural Minimal — Warm-white, deep burgundy accent,
// gallery-like spacing, geometric sans + tight tracking
const C = {
  bg:        '#F0EDE6',
  surface:   '#FFFFFF',
  ink:       '#16140F',
  ink2:      '#5A554B',
  ink3:      '#A39B8B',
  line:      '#D8D2C2',
  lineSoft:  '#E5DFD0',
  burgundy:  '#5C1E2B',
  burgDeep:  '#3D1018',
  ev: {
    wedding:     '#7A2A39',   // wine
    funeral:     '#3D3D52',   // slate ink
    celebration: '#5C1E2B',   // burgundy
    other:       '#3F4D3F',   // forest
  },
  sans:    '"Plus Jakarta Sans", "Noto Sans JP", system-ui, sans-serif',
  display: '"Plus Jakarta Sans", "Noto Sans JP", system-ui, sans-serif',
  mono:    '"JetBrains Mono", ui-monospace, monospace',
};

function TabBarC({ active }) {
  const items = [
    { k: 'home', label: 'Home',     en: '01' },
    { k: 'cal',  label: 'Calendar', en: '02' },
    { k: 'time', label: 'Story',    en: '03' },
    { k: 'set',  label: 'Settings', en: '04' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      padding: '14px 16px 28px', background: C.surface,
      borderTop: `1px solid ${C.line}`,
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4,
    }}>
      {items.map(it => {
        const on = it.k === active;
        return (
          <div key={it.k} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            color: on ? C.burgundy : C.ink3,
          }}>
            <div style={{
              fontFamily: C.mono, fontSize: 9, fontWeight: 600, letterSpacing: 2,
              color: on ? C.burgundy : C.ink3,
            }}>{it.en}</div>
            <div style={{
              fontFamily: C.sans, fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
              borderTop: `1px solid ${on ? C.burgundy : 'transparent'}`,
              paddingTop: 4,
            }}>{it.label}</div>
          </div>
        );
      })}
    </div>
  );
}

function HomeC() {
  return (
    <div style={{
      width: '100%', height: '100%', background: C.bg, fontFamily: C.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: C.ink,
    }}>
      {/* Top meta */}
      <div style={{
        padding: '10px 24px 14px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
      }}>
        <div style={{ fontFamily: C.mono, fontSize: 10, color: C.ink2, letterSpacing: 1.5 }}>
          THU · MAR 12 · 2026
        </div>
        <div style={{ fontFamily: C.mono, fontSize: 10, color: C.ink2, letterSpacing: 2 }}>
          № 026 / 12
        </div>
      </div>

      <div style={{ padding: '6px 24px 20px' }}>
        <div style={{
          fontFamily: C.display, fontSize: 38, fontWeight: 800,
          letterSpacing: -2.5, lineHeight: 1, color: C.ink,
        }}>
          Good evening,<br/>
          <span style={{ color: C.burgundy, fontWeight: 800 }}>Misaki.</span>
        </div>
      </div>

      {/* Hero — gallery card */}
      <div style={{ padding: '0 16px' }}>
        <div style={{
          background: C.surface, padding: '22px 22px 24px',
          border: `1px solid ${C.line}`,
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            paddingBottom: 12, borderBottom: `1px solid ${C.lineSoft}`,
          }}>
            <div style={{
              fontFamily: C.mono, fontSize: 9.5, color: C.burgundy, fontWeight: 700, letterSpacing: 2.5,
            }}>NEXT · UPCOMING</div>
            <div style={{ fontFamily: C.mono, fontSize: 10, color: C.ink3 }}>01 / 03</div>
          </div>

          <div style={{
            fontFamily: C.display, fontSize: 26, fontWeight: 800, lineHeight: 1.15,
            marginTop: 16, letterSpacing: -1,
          }}>
            長男・蓮の七五三
          </div>
          <div style={{
            fontFamily: C.mono, fontSize: 10.5, color: C.ink2, marginTop: 8, letterSpacing: 1,
          }}>
            03.15.2026 · KAWAGOE HIKAWA SHRINE
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
            marginTop: 22, borderTop: `1px solid ${C.lineSoft}`,
          }}>
            <div style={{ padding: '14px 0', borderRight: `1px solid ${C.lineSoft}` }}>
              <div style={{ fontFamily: C.mono, fontSize: 9, color: C.ink3, letterSpacing: 2 }}>DAYS</div>
              <div style={{
                fontFamily: C.display, fontSize: 36, fontWeight: 800, color: C.burgundy,
                letterSpacing: -2, lineHeight: 1, marginTop: 4,
              }}>47</div>
            </div>
            <div style={{ padding: '14px 0 14px 18px' }}>
              <div style={{ fontFamily: C.mono, fontSize: 9, color: C.ink3, letterSpacing: 2 }}>PROGRESS</div>
              <div style={{
                fontFamily: C.display, fontSize: 36, fontWeight: 800,
                letterSpacing: -2, lineHeight: 1, marginTop: 4,
              }}>
                40<span style={{ fontSize: 16, color: C.ink3, fontWeight: 600, letterSpacing: 0 }}>%</span>
              </div>
              <div style={{
                marginTop: 8, height: 1, background: C.line, position: 'relative',
              }}>
                <div style={{ width: '40%', height: 1, background: C.burgundy }}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next up list */}
      <div style={{ padding: '24px 24px 0' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          marginBottom: 4, paddingBottom: 10, borderBottom: `1px solid ${C.line}`,
        }}>
          <div style={{
            fontFamily: C.mono, fontSize: 10, color: C.burgundy, fontWeight: 700, letterSpacing: 2.5,
          }}>NEXT UP · 3</div>
          <div style={{ fontFamily: C.mono, fontSize: 10, color: C.ink3, letterSpacing: 1 }}>VIEW ALL →</div>
        </div>

        {[
          { c: C.ev.celebration, t: '写真館の予約',         e: 'Shichi-Go-San',     d: '03.15', n: 12 },
          { c: C.ev.wedding,     t: '招待状デザインの確定', e: 'Misaki\'s Wedding', d: '04.10', n: 38 },
          { c: C.ev.funeral,     t: '法要会場の予約',       e: 'Memorial Service',  d: '04.01', n: 5, urgent: true },
        ].map((t, i, arr) => (
          <div key={i} style={{
            display: 'flex', gap: 16, padding: '16px 0',
            borderBottom: i < arr.length - 1 ? `1px solid ${C.lineSoft}` : 'none',
            alignItems: 'flex-start',
          }}>
            <div style={{
              fontFamily: C.mono, fontSize: 10, color: t.c, fontWeight: 700, letterSpacing: 1.5,
              width: 42, paddingTop: 3,
            }}>{t.d}</div>
            <div style={{ width: 1, alignSelf: 'stretch', background: t.c, marginTop: 2, marginBottom: 2 }}/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: C.display, fontSize: 15, fontWeight: 700, color: C.ink, letterSpacing: -0.2 }}>
                {t.t}
              </div>
              <div style={{
                fontFamily: C.mono, fontSize: 9.5, color: C.ink2, marginTop: 4,
                letterSpacing: 1.5, textTransform: 'uppercase',
              }}>{t.e}</div>
            </div>
            <div style={{ textAlign: 'right', paddingTop: 3 }}>
              {t.urgent ? (
                <div style={{
                  fontFamily: C.mono, fontSize: 9, fontWeight: 800, letterSpacing: 2,
                  color: C.surface, background: t.c, padding: '3px 7px',
                }}>URGENT</div>
              ) : (
                <div style={{ fontFamily: C.mono, fontSize: 11, color: C.ink2, letterSpacing: 0.5 }}>
                  <span style={{ fontWeight: 700 }}>{t.n}</span>
                  <span style={{ color: C.ink3 }}>d</span>
                </div>
              )}
              {t.urgent && (
                <div style={{ fontFamily: C.mono, fontSize: 11, color: t.c, marginTop: 4, fontWeight: 700, letterSpacing: 0.5 }}>
                  {t.n}d
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <TabBarC active="home" />
    </div>
  );
}

function CalendarC() {
  const eventsOnDay = { 3: C.ev.wedding, 8: C.ev.celebration, 15: C.ev.celebration, 21: C.ev.funeral, 27: C.ev.other };
  const days = Array.from({length: 35}, (_,i) => i - 5);
  return (
    <div style={{
      width: '100%', height: '100%', background: C.bg, fontFamily: C.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: C.ink,
    }}>
      <div style={{ padding: '10px 24px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ fontFamily: C.mono, fontSize: 10, color: C.ink2, letterSpacing: 1.5 }}>
          MARCH · 2026
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{
            width: 28, height: 28, border: `1px solid ${C.line}`, background: C.surface,
            display: 'grid', placeItems: 'center',
            color: C.ink2, fontFamily: C.display, fontSize: 14,
          }}>‹</div>
          <div style={{
            width: 28, height: 28, background: C.burgundy,
            display: 'grid', placeItems: 'center',
            color: C.surface, fontFamily: C.display, fontSize: 14,
          }}>›</div>
        </div>
      </div>

      <div style={{ padding: '0 24px 16px' }}>
        <div style={{
          fontFamily: C.display, fontSize: 64, fontWeight: 800, lineHeight: 0.9, letterSpacing: -3.5,
        }}>
          <span style={{ color: C.burgundy }}>03</span>
          <span style={{ color: C.ink3, fontWeight: 400 }}>/</span>
          <span style={{ color: C.ink, fontSize: 36, letterSpacing: -1 }}>26</span>
        </div>
      </div>

      <div style={{
        margin: '0 16px', background: C.surface, padding: 14,
        border: `1px solid ${C.line}`,
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: 8 }}>
          {['S','M','T','W','T','F','S'].map((d,i) => (
            <div key={i} style={{
              textAlign: 'center', fontFamily: C.mono, fontSize: 9, fontWeight: 700,
              paddingBottom: 6, letterSpacing: 2,
              color: i===0 ? C.ev.wedding : (i===6 ? C.ev.funeral : C.ink3),
              borderBottom: `1px solid ${C.lineSoft}`,
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
                fontFamily: C.display, fontSize: 13, fontWeight: 600,
                color: !real ? C.ink3 : (i%7===0 ? C.ev.wedding : (i%7===6 ? C.ev.funeral : C.ink)),
              }}>
                {isToday && (
                  <div style={{
                    position: 'absolute', inset: 4,
                    background: C.burgundy,
                  }}/>
                )}
                <div style={{
                  zIndex: 1,
                  color: isToday ? C.surface : 'inherit',
                  fontWeight: isToday ? 800 : 600,
                }}>{real ? d : (d <= 0 ? 28+d : d-31)}</div>
                {ev && real && !isToday && <div style={{
                  width: 4, height: 4, background: ev, marginTop: 2,
                }}/>}
                {isToday && ev && <div style={{
                  width: 4, height: 4, background: C.surface, marginTop: 2, zIndex: 1,
                }}/>}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ padding: '24px 24px 0' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          paddingBottom: 10, borderBottom: `1px solid ${C.line}`, marginBottom: 4,
        }}>
          <div>
            <div style={{ fontFamily: C.mono, fontSize: 10, color: C.burgundy, fontWeight: 700, letterSpacing: 2.5 }}>
              SUN · 03 / 15
            </div>
            <div style={{ fontFamily: C.display, fontSize: 22, fontWeight: 800, marginTop: 4, letterSpacing: -0.5 }}>
              On this day
            </div>
          </div>
          <div style={{ fontFamily: C.mono, fontSize: 10, color: C.ink3 }}>2 EVENTS</div>
        </div>

        {[
          { c: C.ev.celebration, t: '長男・蓮の七五三', time: '10:00 — 14:00', loc: 'KAWAGOE HIKAWA' },
          { c: C.ev.other,       t: '家族写真撮影',     time: '15:00 — 16:30', loc: 'STUDIO AOI' },
        ].map((e,i, arr) => (
          <div key={i} style={{
            display: 'flex', gap: 14, padding: '16px 0', alignItems: 'flex-start',
            borderBottom: i < arr.length - 1 ? `1px solid ${C.lineSoft}` : 'none',
          }}>
            <div style={{ width: 2, alignSelf: 'stretch', background: e.c, marginTop: 4 }}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: C.display, fontSize: 15, fontWeight: 700, letterSpacing: -0.2 }}>{e.t}</div>
              <div style={{
                fontFamily: C.mono, fontSize: 10, color: C.ink2, marginTop: 5, letterSpacing: 1.5,
                display: 'flex', gap: 10,
              }}>
                <span>{e.time}</span><span style={{ color: C.ink3 }}>·</span><span>{e.loc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <TabBarC active="cal" />
    </div>
  );
}

function TimelineC() {
  const rows = [
    { y: '2027', age: 36, items: [
      { c: C.ev.celebration, name: '長女・葵の七五三', date: 'NOV', sub: '3 years · 753' },
    ]},
    { y: '2026', age: 35, current: true, items: [
      { c: C.ev.celebration, name: '長男・蓮の七五三', date: 'MAR 15', sub: '5 years · 753' },
      { c: C.ev.wedding,     name: '妹・美咲の結婚式', date: 'APR 20', sub: 'Family attendance' },
      { c: C.ev.funeral,     name: '祖父・一周忌',     date: 'APR 01', sub: 'Memorial service' },
    ]},
    { y: '2025', age: 34, items: [
      { c: C.ev.other, name: '次男・誕生', date: 'JUL 03', sub: 'Family record' },
    ]},
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: C.bg, fontFamily: C.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: C.ink,
    }}>
      <div style={{ padding: '10px 24px 14px' }}>
        <div style={{ fontFamily: C.mono, fontSize: 10, color: C.burgundy, fontWeight: 700, letterSpacing: 2.5 }}>
          A LIFE IN CHAPTERS
        </div>
        <div style={{
          fontFamily: C.display, fontSize: 36, fontWeight: 800, marginTop: 8, letterSpacing: -2, lineHeight: 1,
        }}>
          Timeline.
        </div>
      </div>

      <div style={{ padding: '8px 24px 14px', display: 'flex', gap: 6, overflow: 'hidden' }}>
        {[['ALL', true], ['SELF'], ['KIDS'], ['FAMILY']].map(([l, on], i) => (
          <div key={i} style={{
            padding: '5px 12px',
            background: on ? C.burgundy : 'transparent',
            color: on ? C.surface : C.ink2,
            border: `1px solid ${on ? C.burgundy : C.line}`,
            fontFamily: C.mono, fontSize: 9, fontWeight: 700, letterSpacing: 2,
          }}>{l}</div>
        ))}
      </div>

      <div style={{ padding: '0 24px' }}>
        {rows.map(r => (
          <div key={r.y} style={{
            paddingTop: 18, marginTop: 4, borderTop: `1px solid ${C.line}`,
          }}>
            <div style={{
              display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
              marginBottom: 14,
            }}>
              <div style={{
                fontFamily: C.display, fontSize: 38, fontWeight: 800, letterSpacing: -2, lineHeight: 1,
                color: r.current ? C.burgundy : C.ink,
              }}>{r.y}</div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: C.mono, fontSize: 10, color: C.ink3, letterSpacing: 2 }}>AGE {r.age}</div>
                {r.current && (
                  <div style={{
                    fontFamily: C.mono, fontSize: 9, color: C.burgundy, marginTop: 3, fontWeight: 700, letterSpacing: 2,
                  }}>● PRESENT</div>
                )}
              </div>
            </div>
            {r.items.map((it, i, arr) => (
              <div key={i} style={{
                display: 'flex', gap: 14, padding: '12px 0',
                borderTop: `1px solid ${C.lineSoft}`,
              }}>
                <div style={{
                  width: 2, alignSelf: 'stretch', background: it.c,
                }}/>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                    <div style={{
                      fontFamily: C.display, fontSize: 15, fontWeight: 700, color: C.ink, letterSpacing: -0.2,
                    }}>{it.name}</div>
                    <div style={{
                      fontFamily: C.mono, fontSize: 9.5, color: C.ink2, letterSpacing: 1.5,
                    }}>{it.date}</div>
                  </div>
                  <div style={{
                    fontFamily: C.mono, fontSize: 9.5, color: C.ink3, marginTop: 4, letterSpacing: 2,
                  }}>{it.sub}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <TabBarC active="time" />
    </div>
  );
}

function SettingsC() {
  return (
    <div style={{
      width: '100%', height: '100%', background: C.bg, fontFamily: C.sans,
      paddingTop: 56, paddingBottom: 100, overflow: 'hidden', color: C.ink,
    }}>
      <div style={{ padding: '10px 24px 14px' }}>
        <div style={{ fontFamily: C.mono, fontSize: 10, color: C.burgundy, fontWeight: 700, letterSpacing: 2.5 }}>
          ACCOUNT · PREFERENCES
        </div>
        <div style={{
          fontFamily: C.display, fontSize: 36, fontWeight: 800, letterSpacing: -2, marginTop: 8, lineHeight: 1,
        }}>
          Settings.
        </div>
      </div>

      <div style={{
        margin: '0 16px', padding: 20, background: C.surface,
        border: `1px solid ${C.line}`,
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <div style={{
          width: 56, height: 56,
          background: C.burgundy, color: C.surface,
          display: 'grid', placeItems: 'center',
          fontFamily: C.display, fontSize: 24, fontWeight: 800, letterSpacing: -1,
        }}>M</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: C.display, fontSize: 17, fontWeight: 800, letterSpacing: -0.5 }}>
            佐藤 美咲
          </div>
          <div style={{ fontFamily: C.mono, fontSize: 10, color: C.ink2, marginTop: 4, letterSpacing: 1 }}>
            misaki@example.com
          </div>
          <div style={{
            display: 'inline-block', marginTop: 8, fontFamily: C.mono,
            fontSize: 9, fontWeight: 700, color: C.burgundy, letterSpacing: 2.5,
            paddingBottom: 1, borderBottom: `1px solid ${C.burgundy}`,
          }}>FAMILY · MEMBER</div>
        </div>
      </div>

      <div style={{ padding: '24px 24px 10px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          paddingBottom: 10, borderBottom: `1px solid ${C.line}`,
        }}>
          <div style={{ fontFamily: C.mono, fontSize: 10, color: C.ink2, fontWeight: 700, letterSpacing: 2.5 }}>
            SHARED · 4 MEMBERS
          </div>
          <div style={{ fontFamily: C.mono, fontSize: 10, color: C.burgundy, letterSpacing: 1 }}>INVITE →</div>
        </div>
      </div>

      <div style={{ padding: '4px 24px 0', display: 'flex', gap: 10 }}>
        {[
          { n: '夫', c: C.ev.other }, { n: '蓮', c: C.burgundy },
          { n: '葵', c: C.ev.wedding }, { n: '母', c: C.ev.funeral },
        ].map(p => (
          <div key={p.n} style={{
            width: 42, height: 42, background: p.c, color: C.surface,
            fontFamily: C.display, fontWeight: 800, fontSize: 16,
            display: 'grid', placeItems: 'center', letterSpacing: -0.5,
          }}>{p.n}</div>
        ))}
      </div>

      <div style={{ padding: '20px 16px 0' }}>
        <div style={{ background: C.surface, border: `1px solid ${C.line}` }}>
          {[
            { t: '通知',                   en: 'NOTIFICATIONS', sub: 'タスク前日にお知らせ',  tail: 'ON' },
            { t: '表示テーマ',             en: 'APPEARANCE',    sub: 'Architectural',         tail: '›' },
            { t: 'プロフィール編集',       en: 'PROFILE',        sub: '',                      tail: '›' },
            { t: 'イベントの色設定',       en: 'EVENT COLORS',  sub: '',                      tail: '›' },
            { t: 'プランをアップグレード', en: 'UPGRADE',        sub: '無制限のイベント',      tail: '›', accent: true },
          ].map((r, i, arr) => (
            <div key={r.t} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '16px 18px',
              borderBottom: i < arr.length - 1 ? `1px solid ${C.lineSoft}` : 'none',
            }}>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: C.mono, fontSize: 9, fontWeight: 700, letterSpacing: 2.5,
                  color: r.accent ? C.burgundy : C.ink2,
                }}>{r.en}</div>
                <div style={{
                  fontFamily: C.display, fontSize: 14, fontWeight: 700, marginTop: 4, letterSpacing: -0.2,
                }}>{r.t}</div>
                {r.sub && <div style={{
                  fontFamily: C.sans, fontSize: 11, color: C.ink2, marginTop: 3,
                }}>{r.sub}</div>}
              </div>
              <div style={{
                fontFamily: C.mono, fontSize: 12, fontWeight: 700,
                color: r.accent ? C.burgundy : C.ink3, letterSpacing: 1,
              }}>{r.tail}</div>
            </div>
          ))}
        </div>
        <div style={{
          textAlign: 'center', marginTop: 18, fontFamily: C.mono,
          fontSize: 9.5, color: C.ink3, letterSpacing: 4,
        }}>L I F E P A T H · V 1.0</div>
      </div>

      <TabBarC active="set" />
    </div>
  );
}

Object.assign(window, { HomeC, CalendarC, TimelineC, SettingsC });
