function count($this) {
    var current = parseInt($this.html(), 10);
    current = current + 1;
    $this.html(++current);
    if (current > $this.data('count')) {
      $this.html($this.data('count'));
    } else {
      setTimeout(function() {
        count($this)
      }, 1);
    }
  }
  
  $(".stat-count").each(function() {
    $(this).data('count', parseInt($(this).html(), 10));
    $(this).html('0');
    count($(this));
  });