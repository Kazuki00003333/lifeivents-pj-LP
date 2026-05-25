/* eslint-disable */
// Variation A — Auth & Onboarding screens
const AA = {
  bg: '#F6EFE4', surface: '#FFFCF7', surfaceAlt: '#EFE5D4',
  ink: '#2A201A', ink2: '#6F5F52', ink3: '#A89A8B',
  line: '#E6DAC5', accent: '#B5572E', accentSoft: '#E9C7AE',
  ev: { wedding: '#B5485C', funeral: '#6E5380', celebration: '#C28534', other: '#7E8C7B' },
  serif: '"Noto Serif JP", serif',
  sans:  '"Noto Sans JP", -apple-system, system-ui, sans-serif',
};

// ── LOGIN ────────────────────────────────────────────────────────────
function LoginA() {
  return (
    <div style={{
      width: '100%', height: '100%', background: AA.bg, fontFamily: AA.sans,
      paddingTop: 56, paddingBottom: 32, overflow: 'hidden', color: AA.ink,
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ flex: 1, padding: '36px 28px 0', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <div style={{
              fontFamily: AA.serif, fontSize: 44, fontWeight: 700, color: AA.ink, letterSpacing: -1,
            }}>LifePath</div>
            <div style={{
              fontFamily: AA.serif, fontSize: 11, color: AA.accent, letterSpacing: 6, marginTop: 6,
            }}>家族と暮らしの記録</div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: AA.ink2, marginBottom: 6, letterSpacing: 1 }}>メールアドレス</div>
            <div style={{
              background: AA.surface, border: `1px solid ${AA.line}`, borderRadius: 12,
              padding: '13px 14px', fontSize: 15, color: AA.ink,
            }}>misaki@example.com</div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: AA.ink2, marginBottom: 6, letterSpacing: 1 }}>パスワード</div>
            <div style={{
              background: AA.surface, border: `1px solid ${AA.line}`, borderRadius: 12,
              padding: '13px 14px', fontSize: 15, color: AA.ink, letterSpacing: 4,
            }}>••••••••</div>
          </div>

          <div style={{
            textAlign: 'right', fontSize: 12, color: AA.accent,
            textDecoration: 'underline', textUnderlineOffset: 3, marginBottom: 20,
          }}>パスワードを忘れた方</div>

          {/* CTA */}
          <div style={{
            background: AA.accent, color: '#fff', borderRadius: 14,
            padding: '14px 0', textAlign: 'center',
            fontFamily: AA.serif, fontSize: 16, fontWeight: 700,
            boxShadow: '0 4px 14px rgba(181,87,46,0.25)', marginBottom: 12,
          }}>ログイン</div>

          <div style={{
            border: `1.5px dashed ${AA.line}`, borderRadius: 14,
            padding: '12px 0', textAlign: 'center',
            fontSize: 13, color: AA.ink3,
          }}>デモアカウントで試す</div>
        </div>

        <div style={{ textAlign: 'center', fontSize: 13, color: AA.ink2, marginTop: 24 }}>
          アカウントをお持ちでない方は <span style={{ color: AA.accent, fontWeight: 700 }}>新規登録</span>
        </div>
      </div>
    </div>
  );
}

// ── ONBOARDING — slide intro ───────────────────────────────────────
function OnboardingA1() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: `linear-gradient(180deg, ${AA.ev.celebration}40 0%, ${AA.accentSoft}50 60%, ${AA.bg} 100%)`,
      fontFamily: AA.sans, paddingTop: 56, overflow: 'hidden', color: AA.ink,
      position: 'relative',
    }}>
      {/* Decorative pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 18px)',
      }}/>

      <div style={{
        position: 'relative', padding: '40px 32px 0', height: '100%',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 40 }}>
          {/* Icon */}
          <div style={{
            width: 72, height: 72, borderRadius: 18,
            background: AA.surface, border: `1px solid ${AA.line}`,
            display: 'grid', placeItems: 'center', marginBottom: 24,
            fontFamily: AA.serif, fontSize: 38, color: AA.accent,
            boxShadow: '0 6px 24px rgba(60,40,20,0.1)',
          }}>✦</div>

          <div style={{
            fontFamily: AA.serif, fontSize: 28, fontWeight: 700, lineHeight: 1.35,
            color: AA.ink, marginBottom: 16,
          }}>
            人生の大事な節目を、<br/>
            <em style={{ fontStyle: 'italic', color: AA.accent }}>抜け漏れなく</em><br/>
            準備する。
          </div>
          <div style={{ fontSize: 14, color: AA.ink2, lineHeight: 1.7 }}>
            七五三・入学・結婚式・葬儀まで。<br/>
            大切な節目をプロジェクトとして管理し、<br/>
            タスクを整理して準備を確実に進められます。
          </div>
        </div>

        {/* Footer */}
        <div style={{ paddingBottom: 16 }}>
          <div style={{
            display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 20,
          }}>
            <div style={{ width: 26, height: 5, borderRadius: 5, background: AA.accent }}/>
            <div style={{ width: 6, height: 5, borderRadius: 5, background: AA.line }}/>
            <div style={{ width: 6, height: 5, borderRadius: 5, background: AA.line }}/>
          </div>
          <div style={{
            background: AA.accent, color: '#fff', borderRadius: 14,
            padding: '14px 0', textAlign: 'center',
            fontFamily: AA.serif, fontSize: 16, fontWeight: 700,
            boxShadow: '0 4px 14px rgba(181,87,46,0.3)',
          }}>はじめる（新規登録）</div>
          <div style={{
            marginTop: 12, textAlign: 'center', fontSize: 13, color: AA.ink2,
          }}>既にアカウントをお持ちの方は <span style={{ color: AA.accent, fontWeight: 700 }}>ログイン</span></div>
        </div>
      </div>
    </div>
  );
}

// ── ONBOARDING — wizard ────────────────────────────────────────────
function OnboardingA2() {
  return (
    <div style={{
      width: '100%', height: '100%', background: AA.bg, fontFamily: AA.sans,
      paddingTop: 56, overflow: 'hidden', color: AA.ink, position: 'relative',
    }}>
      <div style={{ padding: '6px 20px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 999,
          display: 'grid', placeItems: 'center', color: AA.ink2,
          fontFamily: AA.serif, fontSize: 18,
        }}>‹</div>
        <div style={{ flex: 1, height: 4, background: AA.surfaceAlt, borderRadius: 4, overflow: 'hidden' }}>
          <div style={{ width: '60%', height: '100%', background: AA.accent }}/>
        </div>
        <div style={{ fontSize: 11, color: AA.ink3, fontWeight: 700 }}>2/3</div>
      </div>

      <div style={{ padding: '8px 24px 0', overflow: 'hidden' }}>
        <div style={{ fontFamily: AA.serif, fontSize: 11, color: AA.accent, letterSpacing: 4, fontWeight: 700 }}>
          STEP 2 ・ あなたについて
        </div>
        <div style={{ fontFamily: AA.serif, fontSize: 22, fontWeight: 700, marginTop: 6, lineHeight: 1.3 }}>
          年表を<em style={{ fontStyle: 'italic', color: AA.accent }}>自動作成</em>します
        </div>
        <div style={{ fontSize: 12, color: AA.ink2, marginTop: 6, lineHeight: 1.6 }}>
          生年月日や家族構成から、七五三・入学・成人式などのイベントを自動で年表に並べます。
        </div>

        {/* Form */}
        <div style={{ marginTop: 20 }}>
          {[
            { l: 'ニックネーム', hint: 'アプリ内での呼び名', v: 'みさき' },
            { l: '氏名',         hint: '本名',               v: '佐藤 美咲' },
            { l: '生年月日',     hint: '七五三などを自動算出', v: '1990年 12月 5日', icon: '📅' },
            { l: '居住地（任意）', hint: '都道府県',           v: '東京都', icon: '▾' },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: AA.ink2, marginBottom: 4, letterSpacing: 1 }}>
                {f.l}
              </div>
              <div style={{
                background: AA.surface, border: `1px solid ${AA.line}`, borderRadius: 12,
                padding: '11px 14px', fontSize: 14,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontFamily: f.l === '生年月日' ? AA.serif : AA.sans, fontWeight: 600 }}>{f.v}</span>
                {f.icon && <span style={{ color: AA.ink3 }}>{f.icon}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '14px 20px 28px', background: AA.surface,
        borderTop: `1px solid ${AA.line}`,
      }}>
        <div style={{
          background: AA.accent, color: '#fff', borderRadius: 14,
          padding: '14px 0', textAlign: 'center',
          fontFamily: AA.serif, fontSize: 15, fontWeight: 700,
          boxShadow: '0 4px 14px rgba(181,87,46,0.25)',
        }}>次へ進む</div>
      </div>
    </div>
  );
}

// ── ONBOARDING — preview generated timeline ──────────────────────
function OnboardingA3() {
  const previewItems = [
    { y: '1996',  c: AA.ev.celebration, t: '小学校入学',  age: '6歳' },
    { y: '2002', c: AA.ev.celebration, t: '中学校入学',  age: '12歳' },
    { y: '2008', c: AA.ev.celebration, t: '成人式',      age: '20歳', star: true },
    { y: '2025', c: AA.ev.other,       t: '次男・誕生',  age: '34歳', star: true },
    { y: '2026', c: AA.ev.celebration, t: '長男・蓮の七五三', age: '35歳' },
    { y: '2026', c: AA.ev.wedding,     t: '妹・美咲の結婚式', age: '35歳' },
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: AA.bg, fontFamily: AA.sans,
      paddingTop: 56, overflow: 'hidden', color: AA.ink, position: 'relative',
    }}>
      <div style={{ padding: '6px 20px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 999,
          display: 'grid', placeItems: 'center', color: AA.ink2,
          fontFamily: AA.serif, fontSize: 18,
        }}>‹</div>
        <div style={{ flex: 1, height: 4, background: AA.surfaceAlt, borderRadius: 4, overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '100%', background: AA.accent }}/>
        </div>
        <div style={{ fontSize: 11, color: AA.ink3, fontWeight: 700 }}>3/3</div>
      </div>

      <div style={{ padding: '8px 24px 0' }}>
        <div style={{ fontFamily: AA.serif, fontSize: 11, color: AA.accent, letterSpacing: 4, fontWeight: 700 }}>
          ✦ 年表が完成しました
        </div>
        <div style={{ fontFamily: AA.serif, fontSize: 22, fontWeight: 700, marginTop: 6, lineHeight: 1.3 }}>
          佐藤さんの<br/><em style={{ fontStyle: 'italic', color: AA.accent }}>これまでとこれから</em>
        </div>
        <div style={{ fontSize: 12, color: AA.ink2, marginTop: 6, lineHeight: 1.6 }}>
          {previewItems.length}件のイベントを自動で並べました。後から追加・編集できます。
        </div>
      </div>

      <div style={{ padding: '14px 20px 0', position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 32, top: 22, bottom: 0,
          width: 1, background: AA.line,
        }}/>
        {previewItems.map((it, i) => (
          <div key={i} style={{
            display: 'flex', gap: 14, marginBottom: 10,
          }}>
            <div style={{
              width: 24, fontFamily: AA.serif, fontSize: 14, color: AA.ink2, fontWeight: 700,
              textAlign: 'right', paddingTop: 9,
            }}>{it.y.slice(2)}</div>
            <div style={{
              width: 10, height: 10, borderRadius: 10, background: it.c,
              marginTop: 14, flexShrink: 0, zIndex: 1,
              boxShadow: `0 0 0 3px ${AA.bg}`,
            }}/>
            <div style={{
              flex: 1, background: AA.surface, padding: '8px 12px',
              border: `1px solid ${AA.line}`, borderRadius: 10,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: AA.serif, fontSize: 13, fontWeight: 700 }}>{it.t}</div>
                <div style={{ fontSize: 10, color: AA.ink3, marginTop: 1 }}>{it.age}</div>
              </div>
              {it.star && <span style={{ color: AA.accent, fontSize: 14 }}>✦</span>}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '14px 20px 28px', background: AA.surface,
        borderTop: `1px solid ${AA.line}`,
      }}>
        <div style={{
          background: AA.accent, color: '#fff', borderRadius: 14,
          padding: '14px 0', textAlign: 'center',
          fontFamily: AA.serif, fontSize: 15, fontWeight: 700,
          boxShadow: '0 4px 14px rgba(181,87,46,0.25)',
        }}>LifePathを始める</div>
      </div>
    </div>
  );
}

Object.assign(window, { LoginA, OnboardingA1, OnboardingA2, OnboardingA3 });
