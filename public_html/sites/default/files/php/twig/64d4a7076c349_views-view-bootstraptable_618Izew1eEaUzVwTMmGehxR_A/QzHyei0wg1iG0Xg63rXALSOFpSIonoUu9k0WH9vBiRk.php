<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/contrib/bootstrap_table/templates/views-view-bootstraptable.html.twig */
class __TwigTemplate_816a03d6f8e316404dca7588fdc99df6 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 35
        $this->loadTemplate("views-view-table.html.twig", "modules/contrib/bootstrap_table/templates/views-view-bootstraptable.html.twig", 35)->display($context);
        // line 36
        if ( !(null === ($context["sumFooter"] ?? null))) {
            // line 37
            echo "  <script>
    function ";
            // line 38
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed((($__internal_compile_0 = ($context["sumFooter"] ?? null)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0["sum-title-field"] ?? null) : null), 38, $this->source), "html", null, true);
            echo "() {
      return \"";
            // line 39
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed((($__internal_compile_1 = ($context["sumFooter"] ?? null)) && is_array($__internal_compile_1) || $__internal_compile_1 instanceof ArrayAccess ? ($__internal_compile_1["sum-title"] ?? null) : null), 39, $this->source), "html", null, true);
            echo "\";
    }
    ";
            // line 41
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((($__internal_compile_2 = ($context["sumFooter"] ?? null)) && is_array($__internal_compile_2) || $__internal_compile_2 instanceof ArrayAccess ? ($__internal_compile_2["sum-field"] ?? null) : null));
            foreach ($context['_seq'] as $context["_key"] => $context["field"]) {
                // line 42
                echo "    function ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["field"], 42, $this->source), "html", null, true);
                echo "Formatter(data) {
      var field = this.field
      return data.map(function (row) {
        let div = document.createElement(\"div\");
        div.innerHTML = row[field];
        return +div.innerText.replace(/[^\\d\\.]*/g, '')
      }).reduce(function (sum, i) {
        return sum + i
      }, 0)
    }
    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['field'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 53
            echo "  </script>
";
        }
    }

    public function getTemplateName()
    {
        return "modules/contrib/bootstrap_table/templates/views-view-bootstraptable.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  77 => 53,  59 => 42,  55 => 41,  50 => 39,  46 => 38,  43 => 37,  41 => 36,  39 => 35,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Default theme implementation for displaying a view as a table.
 *
 * Available variables:
 * - attributes: Remaining HTML attributes for the element.
 *   - class: HTML classes that can be used to style contextually through CSS.
 * - title : The title of this group of rows.
 * - header: The table header columns.
 *   - attributes: Remaining HTML attributes for the element.
 *   - content: HTML classes to apply to each header cell, indexed by
 *   the header's key.
 *   - default_classes: A flag indicating whether default classes should be
 *     used.
 * - caption_needed: Is the caption tag needed.
 * - caption: The caption for this table.
 * - accessibility_description: Extended description for the table details.
 * - accessibility_summary: Summary for the table details.
 * - rows: Table row items. Rows are keyed by row number.
 *   - attributes: HTML classes to apply to each row.
 *   - columns: Row column items. Columns are keyed by column number.
 *     - attributes: HTML classes to apply to each column.
 *     - content: The column content.
 *   - default_classes: A flag indicating whether default classes should be
 *     used.
 * - responsive: A flag indicating whether table is responsive.
 * - sticky: A flag indicating whether table header is sticky.
 *
 * @see template_preprocess_views_view_table()
 *
 * @ingroup themeable
 */
#}
{% include 'views-view-table.html.twig' %}
{% if sumFooter is not null %}
  <script>
    function {{ sumFooter['sum-title-field'] }}() {
      return \"{{ sumFooter['sum-title'] }}\";
    }
    {% for field in sumFooter['sum-field'] %}
    function {{ field }}Formatter(data) {
      var field = this.field
      return data.map(function (row) {
        let div = document.createElement(\"div\");
        div.innerHTML = row[field];
        return +div.innerText.replace(/[^\\d\\.]*/g, '')
      }).reduce(function (sum, i) {
        return sum + i
      }, 0)
    }
    {% endfor %}
  </script>
{% endif %}
", "modules/contrib/bootstrap_table/templates/views-view-bootstraptable.html.twig", "/app/public_html/modules/contrib/bootstrap_table/templates/views-view-bootstraptable.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("include" => 35, "if" => 36, "for" => 41);
        static $filters = array("escape" => 38);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['include', 'if', 'for'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
