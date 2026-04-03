const fs = require('fs');
let c = fs.readFileSync('preview.html', 'utf8');

// =============================================
// 1. REPLACE ALL GMAIL ROWS
// =============================================
const gmailStart = '<div class="gp-inbox"><div class="gp-scr">';
const gmailEnd = '</div></div>\n            </div>\n          </div>\n\n          <!-- ========== LINKEDIN PANEL';
const gi1 = c.indexOf(gmailStart);
const gi2 = c.indexOf(gmailEnd);
if (gi1 === -1 || gi2 === -1) { console.log('Gmail markers NOT FOUND', gi1, gi2); process.exit(1); }

// 35 email rows — mix of unread leads and read notifications
const gmailRows = `<div class="gp-inbox"><div class="gp-scr">
                <div class="gr2 un gx g1"><i class="st">&#9733;</i><b class="gf">Marcos D.</b><span class="gs2"><b>Interesado en reuni&oacute;n</b> &mdash; Vi su propuesta de prospecci&oacute;n multicanal y quiero agendar...</span><em class="hot">ahora</em></div>
                <div class="gr2 un gx g2"><i>&#9734;</i><b class="gf">Carolina S.</b><span class="gs2"><b>Propuesta aprobada &check;</b> &mdash; Firmamos el acuerdo, arrancamos la semana que viene...</span><em class="hot">1 min</em></div>
                <div class="gr2 un gx g3"><i class="st">&#9733;</i><b class="gf">Nicol&aacute;s R.</b><span class="gs2"><b>NUEVO LEAD &mdash; 20 reuniones/mes</b> &mdash; Necesitamos escalar urgente nuestra...</span><em class="hot">2 min</em></div>
                <div class="gr2 un gx g4"><i>&#9734;</i><b class="gf">Valentina M.</b><span class="gs2"><b>Demo confirmada Mi&eacute; 10:00</b> &mdash; Prepar&eacute; un brief con los objetivos del Q2...</span><em class="hot">4 min</em></div>
                <div class="gr2 un gx g5"><i class="st">&#9733;</i><b class="gf">Tom&aacute;s L.</b><span class="gs2"><b>34 reuniones este mes &#128293;</b> &mdash; Superaron todas las expectativas, queremos x2...</span><em class="hot">6 min</em></div>
                <div class="gr2 un gx g6"><i>&#9734;</i><b class="gf">Laura G.</b><span class="gs2"><b>Duplicar el servicio</b> &mdash; Los resultados del Q1 fueron excepcionales, necesitamos...</span><em class="hot">8 min</em></div>
                <div class="gr2 un gx g7"><i class="st">&#9733;</i><b class="gf">Diego P.</b><span class="gs2"><b>Presupuesto aprobado &check;</b> &mdash; Adjunto el acuerdo firmado para arrancar campa&ntilde;a...</span><em class="hot">11 min</em></div>
                <div class="gr2 un gx g8"><i>&#9734;</i><b class="gf">Sof&iacute;a K.</b><span class="gs2"><b>Quiero reunirme</b> &mdash; Nos recomendaron y queremos empezar cuanto antes con...</span><em class="hot">14 min</em></div>
                <div class="gr2 un gx g9"><i class="st">&#9733;</i><b class="gf">Fernando A.</b><span class="gs2"><b>LEAD &mdash; CTO quiere escalar</b> &mdash; Vi el caso de estudio y me parece que podr&iacute;an...</span><em class="hot">17 min</em></div>
                <div class="gr2 un gx" style="animation-delay:4.6s"><i>&#9734;</i><b class="gf">Roberto H.</b><span class="gs2"><b>Reuni&oacute;n confirmada Jue 15:00</b> &mdash; Estaremos con todo el equipo directivo...</span><em class="hot">20 min</em></div>
                <div class="gr2 un gx" style="animation-delay:5s"><i class="st">&#9733;</i><b class="gf">Elena W.</b><span class="gs2"><b>Propuesta aceptada</b> &mdash; Avancemos con el plan integral para Q2, presupuesto...</span><em class="hot">23 min</em></div>
                <div class="gr2 un gx" style="animation-delay:5.4s"><i>&#9734;</i><b class="gf">Camila J.</b><span class="gs2"><b>Quiero escalar prospecci&oacute;n</b> &mdash; Tenemos presupuesto aprobado, arrancamos...</span><em class="hot">26 min</em></div>
                <div class="gr2 un gx" style="animation-delay:5.8s"><i class="st">&#9733;</i><b class="gf">Ignacio T.</b><span class="gs2"><b>Re: Kickoff exitoso</b> &mdash; El equipo qued&oacute; impresionado con la primera semana...</span><em class="hot">30 min</em></div>
                <div class="gr2 un gx" style="animation-delay:6.2s"><i>&#9734;</i><b class="gf">Daniela C.</b><span class="gs2"><b>Nuevo lead calificado</b> &mdash; Directora de Ventas de empresa log&iacute;stica, ticket...</span><em class="hot">33 min</em></div>
                <div class="gr2 un gx" style="animation-delay:6.6s"><i class="st">&#9733;</i><b class="gf">Mart&iacute;n B.</b><span class="gs2"><b>Contrato renovado &#127881;</b> &mdash; Renovamos por 12 meses m&aacute;s, ampliamos a 3 canales...</span><em class="hot">36 min</em></div>
                <div class="gr2 un gx" style="animation-delay:7s"><i>&#9734;</i><b class="gf">Agustina P.</b><span class="gs2"><b>Interesada en servicio integral</b> &mdash; Somos una fintech en expansi&oacute;n y...</span><em class="hot">40 min</em></div>
                <div class="gr2 un gx" style="animation-delay:7.4s"><i class="st">&#9733;</i><b class="gf">Lucas M.</b><span class="gs2"><b>Pipeline actualizado +$85K</b> &mdash; 6 deals nuevos entraron esta semana al...</span><em class="hot">44 min</em></div>
                <div class="gr2 un gx" style="animation-delay:7.8s"><i>&#9734;</i><b class="gf">Florencia D.</b><span class="gs2"><b>Quiero agendar para mi equipo</b> &mdash; Somos 4 vendedores y necesitamos sistema...</span><em class="hot">48 min</em></div>
                <div class="gr2 rd"><i>&#9734;</i><b class="gf">Calendly</b><span class="gs2"><b>3 reuniones agendadas ma&ntilde;ana</b> &mdash; Recordatorio autom&aacute;tico de tu agenda...</span><em>ayer</em></div>
                <div class="gr2 rd"><i>&#9734;</i><b class="gf">Google Ads</b><span class="gs2"><b>Resumen semanal</b> &mdash; 23 conversiones, CPA $12.40, ROAS 4.2x esta semana...</span><em>ayer</em></div>
                <div class="gr2 rd"><i>&#9734;</i><b class="gf">LinkedIn</b><span class="gs2"><b>Tu publicaci&oacute;n tuvo 847 vistas</b> &mdash; Tu post sobre prospecci&oacute;n B2B gener&oacute;...</span><em>ayer</em></div>
                <div class="gr2 rd"><i>&#9734;</i><b class="gf">HubSpot</b><span class="gs2"><b>12 contactos sincronizados</b> &mdash; CRM actualizado autom&aacute;ticamente con nuevos...</span><em>ayer</em></div>
                <div class="gr2 rd"><i>&#9734;</i><b class="gf">Slack</b><span class="gs2"><b>#ventas: Pipeline update</b> &mdash; 8 deals en negociaci&oacute;n, 3 por cerrar esta semana...</span><em>ayer</em></div>
                <div class="gr2 rd"><i>&#9734;</i><b class="gf">Stripe</b><span class="gs2"><b>Pago recibido $4,500</b> &mdash; Factura #1247 cobrada exitosamente de cliente...</span><em>lun</em></div>
                <div class="gr2 rd"><i>&#9734;</i><b class="gf">Notion</b><span class="gs2"><b>Reporte semanal listo</b> &mdash; M&eacute;tricas de prospecci&oacute;n actualizadas autom&aacute;ticamente...</span><em>lun</em></div>
                <div class="gr2 rd"><i>&#9734;</i><b class="gf">Zapier</b><span class="gs2"><b>5 automatizaciones ejecutadas</b> &mdash; Leads importados a CRM sin intervenci&oacute;n...</span><em>lun</em></div>
                <div class="gr2 rd"><i class="st">&#9733;</i><b class="gf">Loom</b><span class="gs2"><b>Tu video fue visto 23 veces</b> &mdash; El video de propuesta que enviaste a...</span><em>dom</em></div>
                <div class="gr2 rd"><i>&#9734;</i><b class="gf">Typeform</b><span class="gs2"><b>Nueva respuesta recibida</b> &mdash; Formulario de calificaci&oacute;n completado por...</span><em>dom</em></div>
                <div class="gr2 rd"><i>&#9734;</i><b class="gf">Calendly</b><span class="gs2"><b>Reuni&oacute;n cancelada</b> &mdash; Juan P. cancel&oacute; la reuni&oacute;n del viernes, reagendar...</span><em>s&aacute;b</em></div>
                <div class="gr2 rd"><i class="st">&#9733;</i><b class="gf">Google Analytics</b><span class="gs2"><b>Tr&aacute;fico +34% esta semana</b> &mdash; Landing de prospecci&oacute;n B2B con 1,240 visitas...</span><em>s&aacute;b</em></div>
                <div class="gr2 rd"><i>&#9734;</i><b class="gf">Meta Ads</b><span class="gs2"><b>Campa&ntilde;a optimizada</b> &mdash; El algoritmo encontr&oacute; nueva audiencia con CPA...</span><em>vie</em></div>
                <div class="gr2 rd"><i>&#9734;</i><b class="gf">Apollo.io</b><span class="gs2"><b>Lista de 500 prospectos lista</b> &mdash; Segmentaci&oacute;n por industria y cargo...</span><em>vie</em></div>
                <div class="gr2 rd"><i class="st">&#9733;</i><b class="gf">Woodpecker</b><span class="gs2"><b>Secuencia completada</b> &mdash; Campa&ntilde;a &quot;Q2 Expansion&quot; termin&oacute; con 42% apertura...</span><em>jue</em></div>
                <div class="gr2 rd"><i>&#9734;</i><b class="gf">Intercom</b><span class="gs2"><b>Chat en vivo: nuevo mensaje</b> &mdash; Visitante pregunt&oacute; por planes enterprise...</span><em>jue</em></div>
                <div class="gr2 rd"><i>&#9734;</i><b class="gf">Figma</b><span class="gs2"><b>Comentario en landing page</b> &mdash; &quot;Mover CTA m&aacute;s arriba&quot; en la versi&oacute;n 3.2...</span><em>mi&eacute;</em></div>
              </div></div>`;

c = c.substring(0, gi1) + gmailRows + c.substring(gi2);
console.log('Gmail: 35 email rows inserted');

// =============================================
// 2. REPLACE ALL LINKEDIN CONVERSATIONS
// =============================================
const liStart = '<div class="lp-list"><div class="lp-scr">';
const liEnd = '</div></div>\n        </div>\n\n        </div>\n      </div>';
const li1 = c.indexOf(liStart);
const li2 = c.indexOf(liEnd);
if (li1 === -1 || li2 === -1) { console.log('LinkedIn markers NOT FOUND', li1, li2); process.exit(1); }

// Helper to make a Ghibli avatar
function av(bg, initials, hairColor, skinColor, extras) {
  return `<div class="la" style="background:transparent"><svg viewBox="0 0 40 40" width="40" height="40"><circle cx="20" cy="20" r="20" fill="${skinColor}"/><ellipse cx="20" cy="38" rx="16" ry="10" fill="${bg}"/><path d="M8 15c0-7 5-12 12-12s12 5 12 12" fill="${hairColor}"/><circle cx="14.5" cy="19" r="2.2" fill="${hairColor}"/><circle cx="25.5" cy="19" r="2.2" fill="${hairColor}"/><circle cx="15.3" cy="18.2" r=".8" fill="#fff"/><circle cx="26.3" cy="18.2" r=".8" fill="#fff"/><path d="M17 25q3 3 6 0" stroke="#c4956a" stroke-width="1.2" fill="none" stroke-linecap="round"/>${extras||''}</svg></div>`;
}

const blush = '<ellipse cx="11" cy="22" rx="2.5" ry="1.5" fill="#f5a0a0" opacity=".35"/><ellipse cx="29" cy="22" rx="2.5" ry="1.5" fill="#f5a0a0" opacity=".35"/>';
const glasses = '<circle cx="14" cy="19" r="4" fill="none" stroke="#888" stroke-width=".8"/><circle cx="26" cy="19" r="4" fill="none" stroke="#888" stroke-width=".8"/><line x1="18" y1="19" x2="22" y2="19" stroke="#888" stroke-width=".8"/>';

const linkedinConvs = `<div class="lp-list"><div class="lp-scr">
              <div class="lc lx x1">${av('#0a66c2','MD','#2c2014','#e8d5b7',blush)}<div class="li2"><span class="ln">Marcos D.</span><span class="lr">VP Comercial &bull; SaaS</span><span class="lm"><b>Quiero agendar una llamada esta semana</b></span></div><span class="lt">ahora</span><span class="ld"></span></div>
              <div class="lc lx x2">${av('#7c3aed','CS','#5c3317','#f5dcc3',blush)}<div class="li2"><span class="ln">Carolina S.</span><span class="lr">CEO &bull; Fintech</span><span class="lm"><b>Aprobamos! Arrancamos lunes</b></span></div><span class="lt">3m</span><span class="ld"></span></div>
              <div class="lc lx x3">${av('#059669','NR','#1a1a1a','#e8d5b7',glasses)}<div class="li2"><span class="ln">Nicol&aacute;s R.</span><span class="lr">Dir. Operaciones &bull; Log&iacute;stica</span><span class="lm"><b>Necesitamos escalar urgente</b></span></div><span class="lt">5m</span><span class="ld"></span></div>
              <div class="lc lx x4">${av('#dc2626','VM','#8b3a1a','#f5dcc3',blush)}<div class="li2"><span class="ln">Valentina M.</span><span class="lr">Head of Growth &bull; EdTech</span><span class="lm">Demo confirmada mi&eacute;rcoles 10 AM</span></div><span class="lt">8m</span></div>
              <div class="lc lx x5">${av('#d97706','TL','#c9a44a','#f5dcc3','')}<div class="li2"><span class="ln">Tom&aacute;s L.</span><span class="lr">Fundador &bull; AgTech</span><span class="lm">Gracias por los resultados!</span></div><span class="lt">12m</span></div>
              <div class="lc lx x6">${av('#0891b2','LG','#1a1a2e','#e8d5b7','')}<div class="li2"><span class="ln">Laura G.</span><span class="lr">CMO &bull; B2B SaaS</span><span class="lm"><b>Quiero reunirme para conversar</b></span></div><span class="lt">18m</span><span class="ld"></span></div>
              <div class="lc lx x7">${av('#6d28d9','DP','#2c1a0e','#d4b896','')}<div class="li2"><span class="ln">Diego P.</span><span class="lr">Dir. Comercial &bull; Seguros</span><span class="lm">Presupuesto firmado, arranquemos</span></div><span class="lt">22m</span></div>
              <div class="lc lx x8">${av('#be185d','SK','#1a0a14','#f5dcc3',blush)}<div class="li2"><span class="ln">Sof&iacute;a K.</span><span class="lr">Gerente Ventas &bull; Real Estate</span><span class="lm"><b>Me interesa reunirme, me recomendaron</b></span></div><span class="lt">28m</span><span class="ld"></span></div>
              <div class="lc lx x9">${av('#1e40af','FA','#1a1a2e','#e8d5b7','')}<div class="li2"><span class="ln">Fernando A.</span><span class="lr">CTO &bull; Log&iacute;stica</span><span class="lm"><b>Conversemos sobre prospecci&oacute;n</b></span></div><span class="lt">35m</span><span class="ld"></span></div>
              <div class="lc lx" style="animation-delay:5.1s">${av('#0369a1','RH','#2c2014','#d4b896','')}<div class="li2"><span class="ln">Roberto H.</span><span class="lr">CEO &bull; Consultor&iacute;a</span><span class="lm"><b>Vi su perfil, me interesa hablar</b></span></div><span class="lt">40m</span><span class="ld"></span></div>
              <div class="lc lx" style="animation-delay:5.6s">${av('#b45309','EW','#5c3317','#f5dcc3',blush)}<div class="li2"><span class="ln">Elena W.</span><span class="lr">Directora &bull; Farmac&eacute;utica</span><span class="lm">Propuesta aceptada, avancemos</span></div><span class="lt">45m</span></div>
              <div class="lc lx" style="animation-delay:6.1s">${av('#0f766e','CJ','#1a1a1a','#f5dcc3',blush)}<div class="li2"><span class="ln">Camila J.</span><span class="lr">Fundadora &bull; HealthTech</span><span class="lm"><b>Presupuesto aprobado, empecemos</b></span></div><span class="lt">50m</span><span class="ld"></span></div>
              <div class="lc lx" style="animation-delay:6.6s">${av('#7e22ce','IT','#2c2014','#e8d5b7',glasses)}<div class="li2"><span class="ln">Ignacio T.</span><span class="lr">VP Ventas &bull; Manufactura</span><span class="lm">El equipo qued&oacute; impresionado</span></div><span class="lt">55m</span></div>
              <div class="lc lx" style="animation-delay:7.1s">${av('#c2410c','DC','#8b3a1a','#f5dcc3','')}<div class="li2"><span class="ln">Daniela C.</span><span class="lr">Head Sales &bull; Retail</span><span class="lm"><b>Nuevo lead, directora compras</b></span></div><span class="lt">1h</span><span class="ld"></span></div>
              <div class="lc lx" style="animation-delay:7.6s">${av('#1d4ed8','MB','#1a1a2e','#d4b896','')}<div class="li2"><span class="ln">Mart&iacute;n B.</span><span class="lr">COO &bull; Construcci&oacute;n</span><span class="lm"><b>Quiero 30 reuniones mensuales</b></span></div><span class="lt">1h</span><span class="ld"></span></div>
              <div class="lc lx" style="animation-delay:8.1s">${av('#059669','AP','#5c3317','#f5dcc3',blush)}<div class="li2"><span class="ln">Agustina P.</span><span class="lr">CEO &bull; Fintech</span><span class="lm">Excelente trabajo, renovamos</span></div><span class="lt">1h</span></div>
              <div class="lc lx" style="animation-delay:8.6s">${av('#a21caf','LM','#c9a44a','#e8d5b7','')}<div class="li2"><span class="ln">Lucas M.</span><span class="lr">Dir. Marketing &bull; SaaS</span><span class="lm"><b>Pipeline +$85K este mes</b></span></div><span class="lt">2h</span><span class="ld"></span></div>
              <div class="lc lx" style="animation-delay:9.1s">${av('#0891b2','FD','#1a0a14','#f5dcc3',blush)}<div class="li2"><span class="ln">Florencia D.</span><span class="lr">Growth Lead &bull; Marketplace</span><span class="lm"><b>Me recomendaron, agendemos</b></span></div><span class="lt">2h</span><span class="ld"></span></div>
              <div class="lc lx" style="animation-delay:9.6s">${av('#475569','JP','#2c2014','#d4b896',glasses)}<div class="li2"><span class="ln">Juan P.</span><span class="lr">CFO &bull; Energ&iacute;a</span><span class="lm">Presupuesto del Q3 aprobado</span></div><span class="lt">3h</span></div>
              <div class="lc lx" style="animation-delay:10.1s">${av('#dc2626','MR','#1a1a1a','#e8d5b7','')}<div class="li2"><span class="ln">Mariana R.</span><span class="lr">VP RRHH &bull; Multinacional</span><span class="lm"><b>Necesitamos reclutar vendedores</b></span></div><span class="lt">3h</span><span class="ld"></span></div>
            </div></div>`;

c = c.substring(0, li1) + linkedinConvs + c.substring(li2);
console.log('LinkedIn: 20 conversations inserted');

// =============================================
// 3. Update pagination count
// =============================================
c = c.replace('1-12 de 12', '1-35 de 35');
console.log('Pagination updated');

// 4. Update badge
c = c.replace('>9+</b>', '>20+</b>');
console.log('LinkedIn badge updated to 20+');

// 5. Gmail scroll needs to go deeper with more content
c = c.replace(
  "0%,30% { transform:translateY(0); }\n        45%,80% { transform:translateY(-50%); }",
  "0%,25% { transform:translateY(0); }\n        40%,82% { transform:translateY(-58%); }"
);
console.log('Gmail scroll range increased');

// 6. LinkedIn scroll deeper too
c = c.replace(
  "0%,35% { transform:translateY(0); }\n        50%,82% { transform:translateY(-30%); }",
  "0%,30% { transform:translateY(0); }\n        45%,82% { transform:translateY(-55%); }"
);
console.log('LinkedIn scroll range increased');

fs.writeFileSync('preview.html', c);
console.log('\nDONE — Both panels filled to the bottom');
