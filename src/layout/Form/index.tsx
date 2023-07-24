import React, { useEffect } from "react";
import "./styles.scss";

type Props = {};

const BitrixForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn-ru.bitrix24.ru/b12896033/crm/form/loader_15.js";
    script.async = true;
    script.setAttribute("data-b24-form", "inline/15/747ktj");
    script.setAttribute("data-skip-moving", "true");

    const scriptTag = document.getElementsByTagName("script")[0];
    if (scriptTag.parentNode) {
      scriptTag.parentNode.insertBefore(script, scriptTag);

      return () => {
        if (scriptTag.parentNode) scriptTag.parentNode.removeChild(script);
      };
    }
  }, []);

  return (
    <section id="form">
      <div className="formBit" id="bitrix-form">
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <script data-b24-form="inline/15/747ktj" data-skip-moving="true">
        (function(w,d,u){
          var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
          var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn-ru.bitrix24.ru/b12896033/crm/form/loader_15.js');
        </script>
      `,
          }}
        />
      </div>
    </section>
  );
};

export default BitrixForm;
