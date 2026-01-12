#!/bin/bash

# Definisci il percorso del file generato (aggustalo se la tua cartella di output è diversa)
SITEMAP_PATH=".output/public/sitemap.xml"

if [ -f "$SITEMAP_PATH" ]; then
    echo "🔍 Pulizia trailing slash in $SITEMAP_PATH..."
    
    # Usa sed per cercare i tag <loc> che finiscono con / prima della chiusura </loc>
    # Esclude la root (dominio.it) per evitare di romperla
    # La regex cerca: un carattere qualsiasi (non slash), poi uno slash, poi la chiusura del tag
    sed -i 's/\([^/]\)\/<\/loc>/\1<\/loc>/g' "$SITEMAP_PATH"
    
    echo "✅ Sitemap pulita con successo!"
else
    echo "⚠️ Errore: File $SITEMAP_PATH non trovato. Hai già eseguito 'pnpm generate'?"
    exit 1
fi